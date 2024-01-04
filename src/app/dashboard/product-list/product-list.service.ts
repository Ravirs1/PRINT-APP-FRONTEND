// product.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = this.afs.collection<Product>('products');
  }

  getProducts(): Observable<Product[]> {
    return this.productsCollection.valueChanges({ idField: 'productId' });
  }

  getProductById(productId: number): Observable<Product | undefined> {
    return this.productsCollection.doc(productId.toString()).valueChanges({ idField: 'productId' });
  }

  addProduct(product: Product): Promise<DocumentReference<Product>> {
    product.id = this.afs.createId();
    return this.productsCollection.add(product);
  }

  updateProduct(productId: number, product: Product): Promise<void> {
    return this.productsCollection.doc(productId.toString()).update(product);
  }

  deleteProduct(productId: number): Promise<void> {
    return this.productsCollection.doc(productId.toString()).delete();
  }
}
