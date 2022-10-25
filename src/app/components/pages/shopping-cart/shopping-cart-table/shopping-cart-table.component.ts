import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Cart, ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-table',
  templateUrl: './shopping-cart-table.component.html',
  styleUrls: ['./shopping-cart-table.component.scss']
})
export class ShoppingCartTableComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();
  public cartContent$?: BehaviorSubject<Array<Cart>>;
  newAmount!: number;

  constructor(public httpService: HttpService, private shoppingService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartContent$ = this.shoppingService.cartContent$;
  }


  onLowering(item: Cart, value: string): void {
    if(Number(value) > 1) {
      this.newAmount = (Number(value) - 1);
    } else {
      this.newAmount = 1;
    }
    this.shoppingService.modify(item, this.newAmount);
  }

  onRaising(item: Cart, value: string): void {
    if(Number(value) < 50) {
      this.newAmount = (Number(value) + 1);
    } else {
      this.newAmount = 50;
    }
    this.shoppingService.modify(item, this.newAmount);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
