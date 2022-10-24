import { Component, Input, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  public isChecked? :boolean;

  @Input() currentYear?: number;

  constructor(public beerService: BeerService,) {
   }

  ngOnInit(): void {
  }

  onChecked(checked: boolean, value: any):void {
    if(checked === true) {
      this.beerService.emitCheckValue(value.toString());
    } else {
      this.beerService.emitCheckValue("");
    }
  }

}
