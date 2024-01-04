import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  singleProduct =    {
    id:"",
    productId: 1,
    productName: "Black polo t-shirt",
    productDescription: "This men's T-shirt features a solid pattern that never goes out of style .Comfortable Regular fit Designed with a regular fit, this T-shirt provides a comfortable and flattering silhouette for men of all body types. High-Quality Pure cotton Fabric Crafted from pure cotton fabric, This T-shirt offers exceptional softness and comfortVersatile Polo Neck and Short Sleeves smart-casual look or a laid-back style .",
    productCategory: "t-shirt",
    productPrice: 999,
    productColor: ["Black"],
    productMRP: 1599,
    productDiscount: 30,
    productImage: "",
    productSize: ["M","L","L"],
    productFitType: "RegularFit",
    productMaterial: "Cotton Blend",
    productSubCategory: "T-shirt",
    productCode: "",
    productOccasion: "Casual",
    productPattern: "Solid",
    productGender: "Male",
    productAgeRange: "",
    productNeckStyle: "Polo",
    relatedProducts: [],
    productDimension: "",
    productWeight: "200g",
    productNumberOfStocks: 15,
    productPostedDate: "",
    productTrending: true,
    productSleeveType: "shortsleeve",
    wishListed: false,
    addedToCart: false,
    isProductOrdered: false,
    productRating: 0
}
updateSingleProduct =    {
  id:"",
  productId: 1,
  productName: "Black polo t-shirt",
  productDescription: "This men's T-shirt features a solid pattern that never goes out of style .Comfortable Regular fit Designed with a regular fit, this T-shirt provides a comfortable and flattering silhouette for men of all body types. High-Quality Pure cotton Fabric Crafted from pure cotton fabric, This T-shirt offers exceptional softness and comfortVersatile Polo Neck and Short Sleeves smart-casual look or a laid-back style .",
  productCategory: "t-shirt",
  productPrice: 999,
  productColor: ["Black"],
  productMRP: 1599,
  productDiscount: 30,
  productImage: "",
  productSize: ["M","L","L"],
  productFitType: "RegularFit",
  productMaterial: "Cotton Blend",
  productSubCategory: "T-shirt",
  productCode: "",
  productOccasion: "Casual",
  productPattern: "Solid",
  productGender: "Male",
  productAgeRange: "",
  productNeckStyle: "Polo",
  relatedProducts: [],
  productDimension: "",
  productWeight: "200g",
  productNumberOfStocks: 15,
  productPostedDate: "",
  productTrending: true,
  productSleeveType: "shortsleeve",
  wishListed: false,
  addedToCart: false,
  isProductOrdered: false,
  productRating: 0
}
  constructor(
    private readonly productListService: ProductListService
  ) {

  }
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productListService.getProducts().subscribe((products) => {
      this.products = products;
      console.log(products)
    });
  }

  addProduct() {
    this.productListService.addProduct(this.singleProduct).then((products) => {
      console.log(products)
    });
  }

  updateProduct(productId: number) {
    // const productData = this.productForm.value;
    this.productListService.updateProduct(productId, this.updateSingleProduct).then(() => {
      // Handle success
    }).catch(error => {
      // Handle error
      console.error('Error updating product: ', error);
    });
  }

  deleteProduct(productId: number) {
    this.productListService.deleteProduct(productId).then(() => {
      // Handle success
    }).catch(error => {
      // Handle error
      console.error('Error deleting product: ', error);
    });
  }

}
