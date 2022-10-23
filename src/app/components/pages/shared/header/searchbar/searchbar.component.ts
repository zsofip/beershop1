import { BeerService } from './../../../../../services/beer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchForm: FormGroup;

  constructor(fb: FormBuilder, public beerService: BeerService, private router: Router) {
    this.searchForm = fb.group({
      searchField: ['', [Validators.minLength(3), Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSearch(value: string): void {
    console.log("value:", value);
    // console.log("filterphrase1:", this.beerService.filterPhrase);
    if(this.searchForm.valid) {
      this.beerService.emitPhrase(value);
      // this.beerService.filterPhrase = value;
      // this.router.navigate(['/'], {queryParams: {'beer_name': value}, queryParamsHandling: 'merge' })
      // console.log("route:", this.router.url);
    } else {
      this.beerService.emitPhrase("");
    }
    // console.log("filterphrase2:", this.beerService.filterPhrase);
  }

}
