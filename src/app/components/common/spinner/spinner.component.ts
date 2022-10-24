import { ShoppingCartService } from './../../../services/shopping-cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() amount: string = "1";


  constructor(private shoppingService: ShoppingCartService) {
   }

  ngOnInit(): void {
    this.shoppingService.emitAmount(Number(this.amount));
  }

  onLowering(value: string): void {
    if(Number(value) > 1) {
      this.amount = (Number(value) - 1).toString();
    } else {
      this.amount = "1";
    }
    this.shoppingService.emitAmount(Number(this.amount));
  }

  onRaising(value: string): void {
    if(Number(value) < 50) {
      this.amount = (Number(value) + 1).toString();
    } else {
      this.amount = "50";
    }
    this.shoppingService.emitAmount(Number(this.amount));
  }

}
