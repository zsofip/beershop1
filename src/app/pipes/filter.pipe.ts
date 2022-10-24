import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[], phrase: string, checkValue: string, key: string = ''): T[] {

    if (!Array.isArray(value) || !phrase || ! checkValue) {
      return value;
    }

    if (!key) {
      return value.filter(
        item => Object.values(item).join(' ').toLowerCase().includes(phrase.toLowerCase())
      );
    }

    if(phrase) {
      return value.filter(item => item[key].toString().toLowerCase().includes(phrase.toLowerCase()));
    }
    if(checkValue) {
      return value.filter(item => item[key].toString().toLowerCase().includes(checkValue.toLowerCase()));
    }
    else {
      return value;
    }

  }

}
