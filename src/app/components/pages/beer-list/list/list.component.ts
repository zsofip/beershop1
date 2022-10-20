import { HttpService } from './../../../../services/http.service';
import { Beer } from './../../../../models/beer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  List$: Observable<Beer[]> = this.httpService.getAll();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

}
