import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, pipe, switchMap } from 'rxjs';
import { HttpService } from './../../../services/http.service';
import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  public currentBeer$: Observable<Beer> = new Observable();
  public currentBeer: Beer[] = [];
  public currentId!: number;

  constructor(private httpService: HttpService, private router: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap(params => this.currentId = params['id'])).subscribe(
        () => {
            this.httpService.getOne(this.currentId).subscribe(
              (result) => {this.currentBeer = result},
              error => {
                console.log('error: ', error)
             }
            )
          }
      );
   }
}
