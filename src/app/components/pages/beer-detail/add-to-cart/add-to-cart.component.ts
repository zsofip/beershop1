import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/models/beer';
import { Cart, ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit, OnDestroy {

  @Input() currentBeer?: Beer;
  btnText: string = "Add to cart";
  private subscriptions = new Subscription();
  public currentAmount: number = 1;
  public price?: number;


  constructor(private shoppingService: ShoppingCartService) {
   }

  ngOnInit(): void {
    this.subscriptions.add(this.shoppingService.listenToAmount().subscribe(am => {
      this.currentAmount = am;
    }))
  }

  multi(n: number | null):number {
    if(n !== null) {
      return n * this.currentAmount;
    } else {
      return NaN;
    }
  }

  sendToCart(currentBeer: Beer) {
    if(currentBeer.ph !== null)
    this.shoppingService.emitToCart({beer: currentBeer, amount: this.currentAmount, total: (currentBeer.ph * this.currentAmount)});
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
