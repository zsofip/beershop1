import { BeerService } from 'src/app/services/beer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public years: number[] = this.beerService.years;
  selectYear = null;

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
  }

  onYearSelected(value: any) {
    console.log("year", value);

  }

}
