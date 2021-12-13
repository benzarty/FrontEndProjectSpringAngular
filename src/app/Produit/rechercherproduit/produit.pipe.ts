import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'produit'
})
export class ProduitPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.libelle.toLowerCase().includes(searchText);
    });
  }

}
