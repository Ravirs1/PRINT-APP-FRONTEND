// user-detail.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartItem, UserDetail } from 'src/app/models/user-details.model';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private userDetailCollection: AngularFirestoreCollection<UserDetail>;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    this.userDetailCollection = this.afs.collection<UserDetail>('userDetails');
  }

  // ... (previous methods)

  // Cart CRUD Operations


  getUserCart(userId: string): Observable<CartItem[] | unknown> {
    return this.userDetailCollection.doc<UserDetail>(userId).valueChanges().pipe(
      switchMap((userDetail: UserDetail | undefined) => {
        return userDetail?.cart ? of(userDetail.cart as CartItem[]) : of([]);
      })
    );
  }


  addToCart(userId: string, newItem: CartItem): Promise<void> {
    return this.userDetailCollection.doc(userId).update({
      cart: firebase.firestore.FieldValue.arrayUnion(newItem)
    }  as unknown as Partial<UserDetail>);
  }


  updateCartItem(userId: string, productId: string, updatedItem: CartItem): Promise<void> {
    return this.userDetailCollection.doc(userId).update({
      'cart': firebase.firestore.FieldValue.arrayRemove({ productId }),
    }as unknown as Partial<UserDetail> ).then(() => {
      return this.userDetailCollection.doc(userId).update({
        cart: firebase.firestore.FieldValue.arrayUnion(updatedItem)
      } as unknown as Partial<UserDetail>);
    });
  }

  removeCartItem(userId: string, productId: string): Promise<void> {
    return this.userDetailCollection.doc(userId).update({
      'cart': firebase.firestore.FieldValue.arrayRemove({ productId }),
    } as unknown as Partial<UserDetail>);
  }
}
