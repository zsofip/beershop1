import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[], phrase: string, key: string = ''): T[] {

    if (!Array.isArray(value) || !phrase) {
      return value;
    }

    if (!key) {
      return value.filter(
        item => Object.values(item).join(' ').toLowerCase().includes(phrase.toLowerCase())
      );
    }

    return value.filter(item => item[key].toString().toLowerCase().includes(phrase.toLowerCase()));
  }

}
