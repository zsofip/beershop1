import { Observable, Subject } from 'rxjs';
import { RandomService } from './random.service';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  // beers$: Observable<Beer[]> = this.httpService.getAll();
  // beer$: Subject<Beer> = this.getBeer();
  beers: [] = [];

  constructor(private httpService: HttpService, private randomService: RandomService) { }

  // getBeer() {
  //   this.beers$.subscribe();
  // }

}
