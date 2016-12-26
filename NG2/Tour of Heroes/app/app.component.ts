import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    
    <a class="btn btn-primary" routerLink="/dashboard" routerLinkActive="active"> Dashborad </a>
    <a class="btn btn-primary" routerLink="/heroes" routerLinkActive="active"> Heroes </a>
   
    <hr/>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}