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
  }

  ngOnInit(): void {
    if(this.status == "sale") {
      this.badgeText = "Sale",
      this.badgeClass = "sale"
    } else if(this.status == "soldOut") {
      this.badgeText = "Sold out",
      this.badgeClass = "sold-out"
    } else if(this.status == "new") {
      this.badgeText = "New",
      this.badgeClass = "new"
    }

    if(this.productOfWeek) {
      this.badgeText = "Product of the week",
      this.badgeClass = "product-of-week"
    }
  }

}
