import { Observable } from 'rxjs';
import { HttpService } from './../../../services/http.service';
import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  @Input() currentBeer$: Observable<Beer> = this.httpService.getOne(1);

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

}
