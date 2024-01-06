import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { CartItem } from 'src/app/models/user-details.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  userId: string = '';
  newItem: any;
  productId: string = '';
  updatedItem: any ;
  constructor(private router: Router,
    private cartService: CartService) {

  }

  proceedToCheckout() {
    this.router.navigate(['/dashboard/checkout']);
  }

  getCartItems() {
    this.cartService.getUserCart(this.userId).subscribe((cart: CartItem[] | unknown) => {
      console.log(cart)
    });
  }

    addToCart() {
      this.cartService.addToCart(this.userId, this.newItem).then(() => {
        // Handle success
      }).catch(error => {
        // Handle error
        console.error('Error adding item to cart: ', error);
      });
    }

    updateCart() {
    this.cartService.updateCartItem(this.userId, this.productId, this.updatedItem).then(() => {
      // Handle success
    }).catch(error => {
      // Handle error
      console.error('Error updating cart item: ', error);
    });
  }

  removeItemFromCart() {
  // Remove a cart item
  this.cartService.removeCartItem(this.userId, this.productId).then(() => {
    // Handle success
  }).catch(error => {
    // Handle error
    console.error('Error removing cart item: ', error);
  });
  }


  }

