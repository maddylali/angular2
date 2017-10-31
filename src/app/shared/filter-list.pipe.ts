import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    const filterText = args ? args.toLocaleLowerCase() : null;
    return filterText ? value.filter((el) => el.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
