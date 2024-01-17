import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from '../product-list/product-list.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  productList:any;

  constructor(
    private readonly productListService: ProductListService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productListService.getProducts().subscribe((products) => {
      this.productList = products;
      console.log(products)
    });
  }

  routeToProductDetails(product: any) {
    this.router.navigate([`dashboard/product/${product.productId}`]);
  }

}
