import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/data-models/person.class';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input() _person!: Person;
  @Output() _personChange = new EventEmitter<Person>();
  
  constructor() { }

  ngOnInit(): void {
  }

  changeNameToJedi(){
    this._person.name = 'JEDI';
  }

}
