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
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports:[SharedModule],
  providers: [ProductListService]
})
export class DashboardModule { }
