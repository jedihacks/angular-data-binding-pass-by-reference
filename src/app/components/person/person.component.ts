import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/data-models/person.class';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() _person!: Person;
  constructor() { }

  ngOnInit(): void {
    console.log('PersonComponent', 'ngOninit(), _person:', this._person.name);
  }

  changeSinglePerson() {
    this._person.changeSelf();
  }

}
