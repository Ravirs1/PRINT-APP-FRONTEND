import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
   
    imports: [
        MatIconModule,
        MatAutocompleteModule,
        MatInputModule,
        MatSelectModule
    ],
    exports:[MatIconModule,MatAutocompleteModule, 
        MatInputModule,MatSelectModule]
  })
  export class MaterialModule { }
  