import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  random():number {
    return Math.floor(Math.random() * 2) + 1;
  }

}
