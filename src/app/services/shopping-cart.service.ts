import { Beer } from './../models/beer';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  amountOfCart: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  cartContent: BehaviorSubject<Array<Cart>> = new BehaviorSubject<Array<Cart>>([]);

  sumTotal$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  emitAmount(value: number): void {
    this.amountOfCart.next(value);
  }

  listenToAmount(): Observable<number> {
    return this.amountOfCart.asObservable();
  }

  emitToCart(contentObj: Cart) {
    this.cartContent.next(this.cartContent.value.concat(contentObj));
  }

  listenToCart(): Observable<Cart[]> {
    return this.cartContent.asObservable();
  }

  modify(cart: Cart, newAmount: number): void {
    const cartUpdated = this.cartContent.getValue().map((item) => {
      if(item === cart && item.beer.ph !== null) {
        return {...item, amount: newAmount, total: (newAmount * item.beer.ph)};
      }
      return item;
    });
    this.cartContent.next(cartUpdated);
    this.getSumTotal();
  }

  getSumTotal(): Observable<number> {
    const total = this.cartContent.getValue().map((item) => {
      if(item.total) {
        return item.total;
      }
      return 0;
    }).reduce((a, b) => a + b, 0);
    this.sumTotal$.next(total);
    return this.sumTotal$.asObservable();
  }
}

export interface Cart {
  beer: Beer;
  amount: number;
  total?: number;
}
