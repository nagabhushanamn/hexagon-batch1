import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'product',
	templateUrl: 'product.component.html'
})
export class ProductComponent {

	@Output()
	buy = new EventEmitter();

	@Input()
	product: any;

	@Input()
	index: number;

	tab: number = 1;

	review: any = {
		stars: 1,
		author: 'new@gmail.com',
		comment: ''
	};

	saveReview(event:any) {
		this.product.reviews.push(this.review);
		this.review = {
			stars: 1,
			author: 'new@gmail.com',
			comment: ''
		};
		console.log('New Review added...');
	}

	changeTab(event: any, tab: number) {
		this.tab = tab;
		event.preventDefault();
	}

	isTabSelected(tab: number): boolean {
		return this.tab === tab;
	}

	buyClickHandler(event: any, productId: number) {
		this.buy.emit(productId);
	}


}