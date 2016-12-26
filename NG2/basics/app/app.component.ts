import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1> <hr/>
    
  <p>{{message}}</p>  
  <p [textContent]="message"></p>

  <hr/>

  <input value="{{myName}}"/>
  <input [value]="myName"/>

  <select>
    <option>A</option>
    <option>B</option>
    <option [selected]="isItemSelected">C</option>
  </select>

  <hr/>

  <img [src]="imagePath"/>

  <hr/>

  <button (click)="yourName='hezagon';myName='Naga'"> get name </button>
  
  <hr/>

  <div (click)="clickHandler1($event)">
    <button (click)="clickHandler2($event)">Click Me!</button>
  </div>

  <a (click)="clickHandler2($event)" href="link">Link</a>

  {{yourName}}

  <hr/>


  <input placeholder="eneter here" #myField/>
  <button (click)="myField.focus()"> focus above input..</button>


  <hr/>


  <div *ngIf="someBoolean">
    Show/Hide this content
  </div>

  <ul>
    <li *ngFor="let item of items;let i=index;let isOdd=odd">{{item}} - {{i}} - {{isOdd}}</li>
  </ul>

  <hr/>

  <div [ngSwitch]="messageCount">
    <p *ngSwitchCase="0">No</p>
    <p *ngSwitchCase="1">yes</p>
  </div>

  <br/>

  <p [style.display]="isDisplay"> Happy christmas</p>

  <hr/>

  <div [ngStyle]="{class1:true,class2:true,class3:false}"></div>

  `,
})
export class AppComponent {
  name: string = 'PM-app';
  message: string = 'Welcome';
  myName: string = "Nag";
  isItemSelected: boolean = true;
  imagePath: string = '../favicon.ico';
  someBoolean=true;
  items: any = ["A", "B", "C", "D"]; 
  messageCount = 0;

  isDisplay = "none";


  clickHandler1(event: any) {
    console.log('handler-1');
    console.dir(event);
    //console.log('Handling click event..');
    //this.message = "You clicked Me";
  }

   clickHandler2(event: any) {
    console.log('handler-2');
    console.dir(event);
    
    event.preventDefault();  
    event.stopPropagation(); 
   

  }

}
