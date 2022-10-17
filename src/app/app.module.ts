import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './components/pages/beer-list/beer-list.component';
import { BeerDetailComponent } from './components/pages/beer-detail/beer-detail.component';
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component';
import { HeaderComponent } from './components/pages/shared/header/header.component';
import { ListComponent } from './components/pages/beer-list/list/list.component';
import { SidebarComponent } from './components/pages/beer-list/sidebar/sidebar.component';
import { DetailComponent } from './components/pages/beer-detail/detail/detail.component';
import { AddToCartComponent } from './components/pages/beer-detail/add-to-cart/add-to-cart.component';
import { ShoppingCartTableComponent } from './components/pages/shopping-cart/shopping-cart-table/shopping-cart-table.component';
import { ShowcaseComponent } from './components/pages/shared/showcase/showcase.component';
import { OrderSummaryComponent } from './components/pages/shopping-cart/order-summary/order-summary.component';
import { InputComponent } from './components/common/input/input.component';
import { CheckboxComponent } from './components/common/checkbox/checkbox.component';
import { PrimaryButtonComponent } from './components/common/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/common/secondary-button/secondary-button.component';
import { IconButtonComponent } from './components/common/icon-button/icon-button.component';
import { TextButtonComponent } from './components/common/text-button/text-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerDetailComponent,
    ShoppingCartComponent,
    HeaderComponent,
    ListComponent,
    SidebarComponent,
    DetailComponent,
    AddToCartComponent,
    ShoppingCartTableComponent,
    ShowcaseComponent,
    OrderSummaryComponent,
    InputComponent,
    CheckboxComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    IconButtonComponent,
    TextButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
