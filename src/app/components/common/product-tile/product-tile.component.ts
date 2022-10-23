import { Beer } from './../../../models/beer';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {

  @Input() currentBeer?: any;
  @Input() productOfWeek: boolean = true;
  // @Input() status: string;
  status: string = "sale";
  compare: string = "compare";
  heart: string = "heart";
  btnText: string = "Add to cart";

  constructor() {
  }

  ngOnInit(): void {
  }


}
