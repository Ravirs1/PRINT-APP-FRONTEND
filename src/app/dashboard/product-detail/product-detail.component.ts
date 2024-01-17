import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductListService } from '../product-list/product-list.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  showDescription: boolean = true;
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
  { id: '4',name: 'test1', image: 'assets/img/product/product8.jpg'}];

  product!: any;
  constructor(
    private productService: ProductListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.getProductDetails(params.id);
    })
   
  }

  getProductDetails(productId: any) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
        console.log(product)
      });
    }
    showDescriptionTab(description: boolean) {
      this.showDescription = description;
    }
  }

