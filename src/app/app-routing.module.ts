import { BeerListComponent } from './components/pages/beer-list/beer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerDetailComponent } from './components/pages/beer-detail/beer-detail.component';
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '', component: BeerListComponent},
  // {path: 'beers', component: BeerListComponent},
  {path: 'detail/:id', component: BeerDetailComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  // {path: '**', component: BeerListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
