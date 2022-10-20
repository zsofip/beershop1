import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() status?: string;
  @Input() productOfWeek?: boolean;
  badgeText?: string;
  badgeClass?: string;

  constructor() {
    if(this.status && this.status == "sale") {
      this.badgeText = "Sale",
      this.badgeClass = "sale"
    } else if(this.status && this.status == "soldOut") {
      this.badgeText = "Sold out",
      this.badgeClass = "sold-out"
    } else if(this.status && this.status == "new") {
      this.badgeText = "New",
      this.badgeClass = "new"
    }

    if(this.productOfWeek && this.productOfWeek == true) {
      this.badgeText = "Product of the week",
      this.badgeClass = "product-of-week"
    }
  }

  ngOnInit(): void {
  }

}
