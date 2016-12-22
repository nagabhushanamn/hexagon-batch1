import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,ProductsListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
