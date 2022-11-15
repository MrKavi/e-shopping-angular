import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'e-shopping-angular';
  // public detectChange!: string;
  public detectChange!: 'string';
  test = {
    name: 'naresh',
    age: '19',
  };

  reflectValue() {
    this.test.age = '20';
    this.test.name = this.detectChange;
  }
}
