import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartItem, Order, UserDetail } from 'src/app/models/user-details.model';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private userDetailCollection: AngularFirestoreCollection<UserDetail>;

  constructor(   private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    this.userDetailCollection = this.afs.collection<UserDetail>('userDetails');
  }

  getUserOrders(userId: string): Observable<Order[] | unknown> {
    return this.userDetailCollection.doc<UserDetail>(userId).valueChanges().pipe(
      switchMap((userDetail: UserDetail | undefined) => {
        return userDetail?.orders ? of(userDetail.orders as Order[]) : of([]);
      })
    );
  }

  addOrder(userId: string, newOrder: Order): Promise<void> {
    return this.userDetailCollection.doc(userId).update({
      orders: firebase.firestore.FieldValue.arrayUnion(newOrder)
    } as unknown as Partial<UserDetail>);
  }

  updateOrder(userId: string, orderId: string, updatedOrder: Order): Promise<void> {
    return this.userDetailCollection.doc(userId).update({
      'orders': firebase.firestore.FieldValue.arrayRemove({ orderId }),
    }as unknown as Partial<UserDetail>).then(() => {
      return this.userDetailCollection.doc(userId).update({
        orders: firebase.firestore.FieldValue.arrayUnion(updatedOrder)
      } as unknown as Partial<UserDetail>);
    });
  }

  removeOrder(userId: string, orderId: string): Promise<void> {
    return this.userDetailCollection.doc(userId).update({
      'orders': firebase.firestore.FieldValue.arrayRemove({ orderId }),
    } as unknown as Partial<UserDetail>);
  }

  updateOrderStatus(userId: string, orderId: string, newStatus: string): Promise<void> {
    const updatedOrderStatus = { orderId, orderStatus: newStatus };

    return this.userDetailCollection.doc(userId).update({
      'orders': firebase.firestore.FieldValue.arrayRemove({ orderId }),
    }as unknown as Partial<UserDetail>).then(() => {
      return this.userDetailCollection.doc(userId).update({
        orders: firebase.firestore.FieldValue.arrayUnion(updatedOrderStatus)
      } as unknown as Partial<UserDetail>);
    });
  }

}
