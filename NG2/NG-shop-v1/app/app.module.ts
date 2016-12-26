import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

import { PriceDiscount } from './price-discount.pipe';
import { ProductService } from './product.service';

@NgModule({
  imports: [BrowserModule, FormsModule , HttpModule],
  declarations: [AppComponent, ProductListComponent, ProductComponent, PriceDiscount],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
