import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <product-list></product-list>
  `,
})
export class AppComponent {

  tab: number=1;

  products: any = [{
    id: 12,
    name: 'Laptop',
    price: 198000,
    description: 'New Model',
    canBuy: true,
    notAvailable: false
  },
  {
    id: 13,
    name: 'Mobile',
    price: 19000,
    description: 'New Model',
    canBuy: true,
    notAvailable: false
  }
  ];

  buy(id: number) {
    console.log('buying...' + id);
  }

  changeTab(event:any,tab:number) {
    this.tab = tab;
    event.preventDefault();
  }

  isTabSelected(tab:number):boolean {
    return this.tab === tab;
  }



}
