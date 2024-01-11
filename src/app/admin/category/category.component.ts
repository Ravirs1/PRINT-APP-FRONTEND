import { Component } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(
    private categoryService: CategoryService
  ) {

  }

  // Fetch all categories
  getCategories() {
this.categoryService.getCategories().subscribe((categories: Category[]) => {
  // Do something with the categories
});
}

// Fetch a specific category
getCategory() {
const categoryId = 'someCategoryId';
this.categoryService.getCategory(categoryId).subscribe((category: Category | undefined) => {
  // Do something with the category
});
}
addCategory() {
// Add a new category
const newCategory: Category = {
  categoryId: 'newCategoryId',
  categoryName: 'New Category',
  // Add other properties as needed
};

this.categoryService.addCategory(newCategory).then((ref) => {
  console.log('Category added with ID: ', ref.id);
}).catch(error => {
  console.error('Error adding category: ', error);
});
}

updatedCategory() {
// Update an existing category
const updatedCategory: Category = {
  categoryId: 'someCategoryId',
  categoryName: 'Updated Category',
  // Add other properties as needed
};

this.categoryService.updateCategory(updatedCategory.categoryId, updatedCategory).then(() => {
  // Handle success
}).catch(error => {
  console.error('Error updating category: ', error);
});
}

deleteCategory() {
// Delete a category
const categoryToDeleteId = 'someCategoryId';
this.categoryService.deleteCategory(categoryToDeleteId).then(() => {
  // Handle success
}).catch(error => {
  console.error('Error deleting category: ', error);
});
}

}
