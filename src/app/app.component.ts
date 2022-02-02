import { Component } from '@angular/core';
import { Person } from './data-models/person.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public originalPerson: Person = new Person('Original');
  public originalArrayOfPeople: Person[] = []; // * Create in the App Component
  public newArrayRef: Person[] = []; // * Reference To be modified by another component

  async ngOnInit() {
    this.originalArrayOfPeople.push(this.originalPerson);
    this.originalArrayOfPeople.push(await Person.build('Original #2'));
    console.warn ('App.component', 'ngOnInit(), this.originalArrayOfPeople = ', this.originalArrayOfPeople);
    console.warn ('App.component', 'ngOnInit(), newArrayRef = ', this.newArrayRef);
  }
}
