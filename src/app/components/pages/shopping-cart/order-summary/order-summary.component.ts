import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OrderData, ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  btnText: string = "Checkout";
  public sumTotal$?: Observable<number>;
  public orderData$?: Observable<Array<OrderData>>;

  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit(): void {
    this.sumTotal$ = this.shoppingService.getSumTotal();
    this.orderData$ = this.shoppingService.orderData$;
  }

}
