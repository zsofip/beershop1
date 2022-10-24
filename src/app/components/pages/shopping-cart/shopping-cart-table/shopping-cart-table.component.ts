import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, pipe, Subscription } from 'rxjs';
import { Beer } from 'src/app/models/beer';
import { HttpService } from 'src/app/services/http.service';
import { Cart, ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-table',
  templateUrl: './shopping-cart-table.component.html',
  styleUrls: ['./shopping-cart-table.component.scss']
})
export class ShoppingCartTableComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();
  public cartAmount?: number;
  // public beerInCart!: Beer;
  public cartContent?: Array<Cart>;

  constructor(public httpService: HttpService, private shoppingService: ShoppingCartService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.shoppingService.listenToCart().subscribe(cont => {
      this.cartContent = cont;
    }))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
