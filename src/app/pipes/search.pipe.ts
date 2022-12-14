import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchTerm: string): any {
    let filteredproducts = []
    if (searchTerm == '') {
      filteredproducts = value
    } else {
      filteredproducts = value.filter(d => {
        return d.category.toLowerCase().includes(searchTerm.trim().toLowerCase())
      })
    }
    return filteredproducts
  }
}
