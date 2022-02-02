import { Component } from '@angular/core';
import { Person } from './data-models/person.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public originalPerson: Person = new Person('Original');
  public originalArrayOfPeople: Person[] = [];

  ngOnInit() {
    console.log ('App.component', 'ngOnInit(), Person = ', this.originalPerson.name);

    this.originalArrayOfPeople.push(this.originalPerson);
    this.originalArrayOfPeople.push(new Person('Original #2'));
    this.originalArrayOfPeople.push(new Person('Original #3'));
    this.originalArrayOfPeople.push(new Person('Original #4'));
  }
}
