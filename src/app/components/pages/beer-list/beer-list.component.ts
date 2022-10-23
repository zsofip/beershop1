import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  constructor(public beerService: BeerService) { }

  ngOnInit(): void {
  }

}
