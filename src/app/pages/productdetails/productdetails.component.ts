import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  id: string | null
  date: Date
  product: any[] = []
  finalproduct: any[] = []

  constructor(private activatedRoute: ActivatedRoute, private productservice: ProductsService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('recipe_id')
    this.date = new Date()
  }

  ngOnInit(): void {

    this.productservice.getProducts().subscribe((res: any) => {
      this.product = res
      this.finalproduct = this.product.filter(p => {
        return p.recipe_id == Number(this.id)
      })

    })
  }
}
