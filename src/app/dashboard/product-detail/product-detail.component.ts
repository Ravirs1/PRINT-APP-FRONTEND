import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  products=[{ name: 'test1', image: 'assets/img/product/product8.jpg'},
  { id: '1', name: 'test1', image: 'assets/img/product/product8.jpg'},
  { id: '2',name: 'test1', image: 'assets/img/product/product8.jpg'},
  { id: '3',name: 'test1', image: 'assets/img/product/product8.jpg'},
  { id: '4',name: 'test1', image: 'assets/img/product/product8.jpg'}]
  constructor() {}

}
