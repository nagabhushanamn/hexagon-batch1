import { TestBed, inject } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

describe('a product-list component', () => {
	let component: ProductListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProductListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProductListComponent], (ProductListComponent) => {
		component = ProductListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});