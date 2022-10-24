import { Router } from '@angular/router';
import { Beer } from './../../../models/beer';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {

  @Input() currentBeer?: Beer;
  @Input() productOfWeek: boolean = true;

  status: string = "sale";
  compare: string = "compare";
  heart: string = "heart";
  btnText: string = "Add to cart";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  toDetail(id: number){
    this.router.navigate([`detail/${id}`]);
  }


}
