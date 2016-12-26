import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'product-list',
	templateUrl: 'product-list.component.html'
})

export class ProductListComponent {

	@Input()
	products: Array<any>;


	buy(productId: number) {
		console.log('AppComponent : buy...' + productId);
	}


}