import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() currentBeer?: Beer;

  constructor() { }

  ngOnInit(): void {
  }

}
