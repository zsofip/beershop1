import { Beer } from './../models/beer';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly baseUrl: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.baseUrl}`);
  }

  getOne(id: number): Observable<Beer> {
    return this.http.get<Beer>(`${this.baseUrl}/${id}`);
  }

  getBeersBefore(year: any): Observable<Beer[]> {
  return this.http.get<Beer[]>(`${this.baseUrl}?brewed_before=01-${year}`);
 }
}
