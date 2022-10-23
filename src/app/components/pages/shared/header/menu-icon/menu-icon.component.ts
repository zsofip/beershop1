import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements OnInit {

  @Input() iconName: string = "myAccount";
  numberOfHearts: number = 0;
  numberOfCompared: number = 0;
  numberInCart: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
