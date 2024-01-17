import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ProductListService } from './product-list/product-list.service';
import { AccountDetailsService } from './account-details/account-details.service';
import { CartService } from './cart/cart.service';
import { OrderService } from './account-details/order.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule({
  declarations: [
    DashboardHomeComponent,
    DashboardComponent,
    AboutComponent,
    ProductListComponent,
    ProductDetailComponent,
    WishListComponent,
    CartComponent,
    ContactComponent,
    CheckoutComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    AccountDetailsComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CarouselModule
    
  ],
  exports:[SharedModule],
  providers: [ProductListService,
    AccountDetailsService,
    CartService,
    OrderService
  ]
})
export class DashboardModule { }
