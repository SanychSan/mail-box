import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: IMailsMail[], term: string): any {
    return term ? items.filter(item => item.subject.toLowerCase().indexOf(term.toLowerCase()) !== -1) : items;
  }

}
