import { Component } from '@angular/core';
import { Person } from './data-models/person.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public originalPerson: Person = new Person('Original Name');

  ngOnInit() {
    console.log ('App.component', 'ngOnInit(), Person = ', this.originalPerson.name);
  }
}
