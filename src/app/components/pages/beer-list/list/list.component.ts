import { HttpService } from './../../../../services/http.service';
import { Beer } from './../../../../models/beer';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  public phrase: string = "";
  public List$: Observable<Beer[]> = this.httpService.getAll();
  private subscriptions = new Subscription();


  constructor(private httpService: HttpService, public beerService: BeerService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.beerService.listenToPhrase().subscribe(phr => {
      console.log('phrase', phr);
      this.phrase = phr;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
