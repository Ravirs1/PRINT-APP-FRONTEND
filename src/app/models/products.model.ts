export interface Product {
    id:string;
    productId: number;
    productName: string;
    productDescription: string;
    productCategory: string;
    productPrice: number;
    productMRP: number;
    productColor: ProductColor[];
    productDiscount: number;
    productImage: string[];
    productSize: string[];
    productFitType: string;
    productMaterial: string;
    productSubCategory: string;
    productCode: string;
    productOccasion: string;
    productPattern: string;
    productGender: string;
    productAgeRange: string;
    productNeckStyle: string;
    relatedProducts: string[];
    recommendedProducts: Product[];
    productDimension: string;
    productWeight: string;
    productNumberOfStocks: number;
    productPostedDate: string;
    productTrending: boolean;
    productSleeveType: string;
    wishListed: boolean;
    addedToCart: boolean;
    isProductOrdered: boolean;
    productRating: number;
  }

  export interface ProductColor {
    productId: string;
    color: string;
  }