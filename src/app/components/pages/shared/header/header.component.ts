import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myAccount: string = "myAccount";
  whishlist: string = "whishlist";
  compare: string = "compare";
  cart: string = "cart";

  constructor() { }

  ngOnInit(): void {
  }

}
