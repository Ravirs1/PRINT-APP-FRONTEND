// category.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { SubCategory } from '../models/sub-category.model';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  private categoryCollection: AngularFirestoreCollection<Category>;

  constructor(private afs: AngularFirestore) {
    this.categoryCollection = this.afs.collection<Category>('categories');
  }

  // ... (previous methods)

  // Subcategory CRUD Operations

  getSubcategories(categoryId: string): Observable<SubCategory[]> {
    const subcategoryCollection = this.categoryCollection.doc(categoryId).collection<SubCategory>('subcategories');

    return subcategoryCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as SubCategory;
          const subCategoryId = a.payload.doc.id;
          return {  ...data,subCategoryId };
        })
      )
    );
  }

  getSubcategory(categoryId: string, subCategoryId: string): Observable<SubCategory | undefined> {
    const subcategoryDocument = this.categoryCollection.doc(categoryId).collection<SubCategory>('subcategories').doc(subCategoryId);

    return subcategoryDocument.valueChanges();
  }

  addSubcategory(categoryId: string, subcategory: SubCategory): Promise<DocumentReference<SubCategory>> {
    return this.categoryCollection.doc(categoryId).collection<SubCategory>('subcategories').add(subcategory);
  }

  updateSubcategory(categoryId: string, subCategoryId: string, updatedSubcategory: SubCategory): Promise<void> {
    const subcategoryDocument = this.categoryCollection.doc(categoryId).collection<SubCategory>('subcategories').doc(subCategoryId);

    return subcategoryDocument.update(updatedSubcategory);
  }

  deleteSubcategory(categoryId: string, subCategoryId: string): Promise<void> {
    const subcategoryDocument = this.categoryCollection.doc(categoryId).collection<SubCategory>('subcategories').doc(subCategoryId);

    return subcategoryDocument.delete();
  }
}
