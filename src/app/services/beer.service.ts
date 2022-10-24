import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RandomService } from './random.service';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  years: number[] = [2008, 2009, 2010, 2011, 2012];

  filterPhrase: BehaviorSubject<string> = new BehaviorSubject<string>("");

  filterChecked: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private httpService: HttpService, private randomService: RandomService) { }

    // for searching: takes the searching phrase to the Subject and let another component to listen to it

    emitPhrase(phrase: string) {
        this.filterPhrase.next(phrase);
      }

    listenToPhrase() {
     return this.filterPhrase.asObservable();
    }

    emitCheckValue(value: string) {
      this.filterChecked.next(value);
    }

    listenToCheckValue() {
      return this.filterChecked.asObservable();
    }
}
