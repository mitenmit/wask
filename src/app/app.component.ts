import { Component } from 'angular2/core';

@Component({
  selector: 'app',
  template: `
      <div>
        <h1>Hello, Angular2</h1>
        <input type="text" #inputHandle />
        <button (click)="onClick($event, inputHandle.value)">Action</button>
      </div>
  `
})
export class AppComponent {
  onClick(event, value) {
    console.log(event, value);
  }
}
