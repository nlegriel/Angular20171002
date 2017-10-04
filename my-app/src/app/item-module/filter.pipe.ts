import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log(args);
    const filtre = args.toLowerCase();
    return filtre ? value.filter( (item) => item.name.toLowerCase().indexOf(filtre) !== -1 ) : value;
  }
}
