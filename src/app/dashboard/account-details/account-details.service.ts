
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Address, UserDetail } from 'src/app/models/user-details.model';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  private userDetailCollection: AngularFirestoreCollection<UserDetail>;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    this.userDetailCollection = this.afs.collection<UserDetail>('userDetails');
  }
  getUserDetails(): Observable<UserDetail[]> {
    return this.userDetailCollection.valueChanges({ idField: 'userId' });
  }

  getUserDetailById(userId: string): Observable<UserDetail | undefined> {
    return this.userDetailCollection.doc(userId).valueChanges({ idField: 'userId' });
  }

  getCurrentUserDetails(): Observable<UserDetail | null | undefined> {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.getUserDetailById(user.uid);
        } else {
          return new Observable<UserDetail | null | undefined>();
        }
      })
    );
  }

  addUserDetail(userDetail: UserDetail): Promise<DocumentReference<UserDetail>> {
    return this.userDetailCollection.add(userDetail);
  }

  updateUserDetail(userId: string, userDetail: UserDetail): Promise<void> {
    return this.userDetailCollection.doc(userId).update(userDetail);
  }

  deleteUserDetail(userId: string): Promise<void> {
    return this.userDetailCollection.doc(userId).delete();
  }

  getUserAddresses(userId: string): Observable<Address[] | unknown> {
    return this.userDetailCollection.doc<UserDetail>(userId).valueChanges().pipe(
      switchMap((userDetail: UserDetail | undefined) => {
        return userDetail?.addresses ? of(userDetail.addresses as Address[]) : of([]);
      })
    );
  }
  addAddress(userId: string, newAddress: Address): Promise<void> {
    return this.userDetailCollection.doc(userId).update({
      addresses: firebase.firestore.FieldValue.arrayUnion(newAddress)
    } as unknown as Partial<UserDetail>);
  }

  updateAddress(userId: string, addressId: string, updatedAddress: Address): Promise<void> {
    return this.userDetailCollection.doc(userId).update({
      'addresses': firebase.firestore.FieldValue.arrayRemove({ addressId }),
    } as unknown as Partial<UserDetail>).then(() => {
      return this.userDetailCollection.doc(userId).update({
        addresses: firebase.firestore.FieldValue.arrayUnion(updatedAddress),
      } as unknown as Partial<UserDetail>);
    });
  }

  deleteAddress(userId: string, addressId: string): Promise<void> {
    return this.userDetailCollection.doc(userId).update({
      'addresses': firebase.firestore.FieldValue.arrayRemove({ addressId }),
    } as unknown as Partial<UserDetail>);
  }
}
