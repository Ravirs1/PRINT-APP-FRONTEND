import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  productList = [
    {productId: 1, productImg: 'assets/img/product/product1.jpg',productTitle: 'Variable with soldout product for title', productPrice: '$180.00', productMrp: '$480.00'},
    {productId: 1, productImg: 'assets/img/product/product1.jpg',productTitle: 'Variable with soldout product for title', productPrice: '$180.00', productMrp: '$480.00'},
    {productId: 1, productImg: 'assets/img/product/product1.jpg',productTitle: 'Variable with soldout product for title', productPrice: '$180.00', productMrp: '$480.00'},
    {productId: 1, productImg: 'assets/img/product/product1.jpg',productTitle: 'Variable with soldout product for title', productPrice: '$180.00', productMrp: '$480.00'},
    {productId: 1, productImg: 'assets/img/product/product1.jpg',productTitle: 'Variable with soldout product for title', productPrice: '$180.00', productMrp: '$480.00'},
    {productId: 1, productImg: 'assets/img/product/product1.jpg',productTitle: 'Variable with soldout product for title', productPrice: '$180.00', productMrp: '$480.00'},
    {productId: 1, productImg: 'assets/img/product/product1.jpg',productTitle: 'Variable with soldout product for title', productPrice: '$180.00', productMrp: '$480.00'},
    {productId: 1, productImg: 'assets/img/product/product1.jpg',productTitle: 'Variable with soldout product for title', productPrice: '$180.00', productMrp: '$480.00'},
    {productId: 1, productImg: 'assets/img/product/product1.jpg',productTitle: 'Variable with soldout product for title', productPrice: '$180.00', productMrp: '$480.00'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
