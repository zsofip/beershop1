import { Beer } from './../models/beer';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  amountOfCart$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  cartContent$: BehaviorSubject<Array<Cart>> = new BehaviorSubject<Array<Cart>>([]);

  sumTotal$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  orderData$: BehaviorSubject<Array<OrderData>> = new BehaviorSubject<Array<OrderData>>([]);

  constructor() { }

  // for following the changes of spinners:

  emitAmount(value: number): void {
    this.amountOfCart$.next(value);
  }

  listenToAmount(): Observable<number> {
    return this.amountOfCart$.asObservable();
  }

  // for creating cart items:

  emitToCart(contentObj: Cart) {
    this.cartContent$.next(this.cartContent$.value.concat(contentObj));
  }

  listenToCart(): Observable<Cart[]> {
    return this.cartContent$.asObservable();
  }

  // for updating cart:

  modify(cart: Cart, newAmount: number): void {
    const cartUpdated = this.cartContent$.getValue().map((item) => {
      if(item === cart && item.beer.ph !== null) {
        return {...item, amount: newAmount, total: (newAmount * item.beer.ph)};
      }
      return item;
    });
    this.cartContent$.next(cartUpdated);
    this.getSumTotal();
  }

  getSumTotal(): Observable<number> {
    const total = this.cartContent$.getValue().map((item) => {
      if(item.total) {
        return item.total;
      }
      return 0;
    }).reduce((a, b) => a + b, 0);
    this.sumTotal$.next(total);
    this.getOrderData();
    return this.sumTotal$.asObservable();
  }

  // for order summary:

  getOrderData() {
    const value = this.sumTotal$.getValue();
    const VAT = value / 10;
    const shipping =  value >= 500 ? 0 : value / 5;
    const orderTotal = value + VAT + shipping;
    const orderData = [{vat: VAT, ship: shipping, order: orderTotal}];
    this.orderData$.next(orderData);
  }
}

export interface Cart {
  beer: Beer;
  amount: number;
  total?: number;
}

export interface OrderData {
  vat: number;
  ship: number;
  order: number;
}
