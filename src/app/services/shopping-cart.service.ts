import { Beer } from './../models/beer';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  amountOfCart: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  cartContent: BehaviorSubject<Array<Cart>> = new BehaviorSubject<Array<Cart>>([]);

  constructor() { }

  emitAmount(value: number) {
    this.amountOfCart.next(value);
  }

  listenToAmount() {
    return this.amountOfCart.asObservable();
  }

  emitToCart(contentObj: Cart) {
    this.cartContent.next(this.cartContent.value.concat(contentObj));
  }

  listenToCart() {
    return this.cartContent.asObservable();
  }
}

export interface Cart {
  beer: Beer;
  amount: number;
}
