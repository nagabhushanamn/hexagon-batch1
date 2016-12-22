import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,ProductListComponent,ProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
