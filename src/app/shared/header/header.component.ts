import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import  ProductList from '../../../assets/local-database/product-details.json';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search = new FormControl('');
  options: any = [];
  filteredOptions!: Observable<string[]>;
  productList: any = ProductList;
  JSONobservable: any;
  isLoggedIn:any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.createObservableFromJSON();
    this.JSONobservable.subscribe((data:any)=>{
      console.log(data); // users array display
      this.options = data.data.map((item: any) => {
        return item.productCategory;
      });
      console.log(this.options)
      this.filteredOptions = this.search.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
      console.log(this.filteredOptions)
    });
  
  }

  createObservableFromJSON() {
    this.JSONobservable = Observable.create((observer: any) => {
        observer.next(this.productList); // This method same as resolve() method from Angular 1
        console.log("am done");
        observer.complete();//to show we are done with our processing
        // observer.error(new Error("error message"));
      ;
    
    })
  }

  private _filter(value: string): string[] {
    console.log(value)
    const filterValue = value.toLowerCase();
    console.log(this.options.filter((option: string) => option.toLowerCase().includes(filterValue)))
    console.log(this.filteredOptions)
    return this.options.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  routeToLogin() {
    this.router.navigate(['login']);
  }

}
