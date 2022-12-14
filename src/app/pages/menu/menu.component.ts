import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  searchTerm: string = ''
  smallsearch: string = ''
  @ViewChild('notfound') not!: ElementRef
  @ViewChild('allpage') page!: ElementRef
  @ViewChild('repet') rep!: ElementRef

  allproduct: any[] = []
  filteredproducts: any[] = []
  cart: any[] = []
  amount: number = 1
  user: string | undefined
  categoryItemNotFound: boolean = false

  constructor(private productsservive: ProductsService, private pipesearch: SearchPipe) { }

  ngOnInit(): void {
    this.productsservive.getProducts().subscribe((data) => {
      this.allproduct = data;
      this.filteredproducts = data;
    })

  }


  flagCategory(ar: any[], s: string) {
    let data = this.pipesearch.transform(ar, s)
    if (this.searchTerm == '') {
      this.categoryItemNotFound = false
    } else {
      this.categoryItemNotFound = false
    } if (data.length == 0) {
      this.categoryItemNotFound = true
    }
  }

}

