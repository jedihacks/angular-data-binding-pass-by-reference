import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/data-models/person.class';

@Component({
  selector: 'app-array-example',
  templateUrl: './array-example.component.html',
  styleUrls: ['./array-example.component.scss']
})
export class ArrayExampleComponent implements OnInit {
  @Input() _people!: Person[];
  @Output() _peopleChange = new EventEmitter<Person[]>();
  
  constructor() { }

  ngOnInit(): void {
    console.log('ArrayExampleComponent', 'ngOninit(), _people:');
    this._people.forEach(person => {
      console.log('ArrayExample, found:', person.name);
    })
  }

  changeAllNames() {
    this._people.forEach(person => {
      person.name = "Changed by ForEach";
      console.log('ArrayExample, changed by forloop:', person.name);
    })
  }

  changeSinglePerson(_person: Person) {
    let tmpPerson= null;
    tmpPerson = this._people.find(tmp => tmp.name === _person.name);
    if (tmpPerson) {
      console.log('tmpPerson found', tmpPerson);
      tmpPerson.name = 'CHANGED BY .FIND';
    }
  }

}
