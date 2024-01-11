import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { CategoryService } from './category/category.service';
import { SubCategoryService } from './sub-category/sub-category.service';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminComponent,
    CategoryComponent,
    SubCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers:[CategoryService,SubCategoryService],
  exports: [SharedModule],
})
export class AdminModule { }
