import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  btnText: string = "Checkout";
  public sumTotal$?: Observable<number>;

  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit(): void {
    this.sumTotal$ = this.shoppingService.getSumTotal();
  }

}
