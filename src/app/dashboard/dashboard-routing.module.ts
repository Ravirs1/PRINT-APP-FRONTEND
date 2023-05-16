import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
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

const routes: Routes = [
  { path: '', component: DashboardComponent,
  children: [
    { path: '', component: DashboardHomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'products', component: ProductListComponent},
    {path: 'product/:id', component:ProductDetailComponent},
    {path: 'my-cart', component: CartComponent},
    {path: 'wish-list',component: WishListComponent },
    {path: 'contact-us' , component: ContactComponent},
    { path: 'checkout', component: CheckoutComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'privacy-policy', component: PrivacyPolicyComponent},
    { path: 'my-account', component: AccountDetailsComponent},
    {path: '', redirectTo: '', pathMatch: 'full'},
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
