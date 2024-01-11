import { Component } from '@angular/core';
import { SubCategory } from '../models/sub-category.model';
import { SubCategoryService } from './sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent {

  constructor(
    private subCategoryService: SubCategoryService
  ) {

  }

  // Assuming you have an instance of subCategoryService

// Fetch subcategories for a category
getSubcategories() {
const categoryId = 'someCategoryId';
this.subCategoryService.getSubcategories(categoryId).subscribe((subcategories: SubCategory[]) => {
  // Do something with the subcategories
});
}

getSubcategory() {
// Fetch a specific subcategory
const subCategoryId = 'someSubCategoryId';
const categoryId = '';
this.subCategoryService.getSubcategory(categoryId, subCategoryId).subscribe((subcategory: SubCategory | undefined) => {
  // Do something with the subcategory
});
}

addSubcategory() {
// Add a new subcategory
const categoryId = '';
const newSubcategory: SubCategory = {
  subCategoryId: 'newSubCategoryId',
  subCategoryName: 'New Subcategory',
  // Add other properties as needed
};

this.subCategoryService.addSubcategory(categoryId, newSubcategory).then((ref) => {
  console.log('Subcategory added with ID: ', ref.id);
}).catch(error => {
  console.error('Error adding subcategory: ', error);
});
}

// Update an existing subcategory

updateSubcategory() {
const updatedSubcategory: SubCategory = {
  subCategoryId: 'someSubCategoryId',
  subCategoryName: 'Updated Subcategory',
  // Add other properties as needed
};
const categoryId = '';

this.subCategoryService.updateSubcategory(categoryId, updatedSubcategory.subCategoryId, updatedSubcategory).then(() => {
  // Handle success
}).catch(error => {
  console.error('Error updating subcategory: ', error);
});
}

// Delete a subcategory
deleteSubcategory() {
const subCategoryToDeleteId = 'someSubCategoryId';
const categoryId = '';
this.subCategoryService.deleteSubcategory(categoryId, subCategoryToDeleteId).then(() => {
  // Handle success
}).catch(error => {
  console.error('Error deleting subcategory: ', error);
});

}
}
