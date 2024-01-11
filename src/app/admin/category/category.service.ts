// category.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoryCollection: AngularFirestoreCollection<Category>;

  constructor(private afs: AngularFirestore) {
    this.categoryCollection = this.afs.collection<Category>('categories');
  }

  // CRUD Operations

  getCategories(): Observable<Category[]> {
    return this.categoryCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Category;
          const categoryId = a.payload.doc.id;
          return { ...data, categoryId };  // Switched the order of properties
        })
      )
    );
  }

  getCategory(categoryId: string): Observable<Category | undefined> {
    return this.categoryCollection.doc<Category>(categoryId).valueChanges();
  }

  addCategory(category: Category): Promise<DocumentReference<Category>> {
    return this.categoryCollection.add(category);
  }

  updateCategory(categoryId: string, updatedCategory: Category): Promise<void> {
    return this.categoryCollection.doc(categoryId).update(updatedCategory);
  }

  deleteCategory(categoryId: string): Promise<void> {
    return this.categoryCollection.doc(categoryId).delete();
  }
}
