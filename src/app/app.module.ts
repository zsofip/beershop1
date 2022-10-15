import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './pages/beer-list/beer-list.component';
import { BeerDetailComponent } from './pages/beer-detail/beer-detail.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { HeaderComponent } from './page-components/header/header.component';
import { ListComponent } from './page-components/list/list.component';
import { SidebarComponent } from './page-components/sidebar/sidebar.component';
import { DetailComponent } from './page-components/detail/detail.component';
import { AddToCartComponent } from './page-components/add-to-cart/add-to-cart.component';
import { ShoppingCartTableComponent } from './page-components/shopping-cart-table/shopping-cart-table.component';
import { ShowcaseComponent } from './page-components/showcase/showcase.component';
import { OrderSummaryComponent } from './page-components/order-summary/order-summary.component';

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
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
