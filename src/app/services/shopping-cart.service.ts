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

  modify(cart: Cart, newAmount: number) {
    const cartUpdated = this.cartContent.getValue().map((item) => {
      if(item === cart && item.beer.ph !== null) {
        return {...item, amount: newAmount, total: (newAmount * item.beer.ph)};
      }
      return item;
    });
    this.cartContent.next(cartUpdated);
  }
}

export interface Cart {
  beer: Beer;
  amount: number;
  total?: number;
}
