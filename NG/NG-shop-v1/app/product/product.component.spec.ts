import { TestBed, inject } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('a product component', () => {
	let component: ProductComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProductComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProductComponent], (ProductComponent) => {
		component = ProductComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});