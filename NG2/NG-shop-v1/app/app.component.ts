import { Component ,OnInit} from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="well" *ngIf="errorMessage">
      {{errorMessage}}
    </div>
    <product-list  [products]="allProducts" ></product-list>
  `,
})
export class AppComponent implements OnInit {

  allProducts: any[];
  errorMessage: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.loadAllProducts()
      .then(
         (products) => this.allProducts = products,
         (error)=>this.errorMessage=error
      );
  }

}
