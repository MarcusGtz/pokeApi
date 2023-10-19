import { getLocaleMonthNames } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform( value: [], sortBy?: keyof[] | string | '' | object | any): any {

    console.log({value, sortBy});

    return value.sort( (a:any,b:any) => (a.name > b.name) ? 1 : -1 );

  }

}
