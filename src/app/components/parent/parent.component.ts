import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../data-models/person.class';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @Input() _person!: Person;
  @Output() _personChange = new EventEmitter<Person>();
  
  constructor() { }

  ngOnInit(): void {
    console.log('ParentComponent', 'ngOnInit(), Person = ', this._person.name);
  }

}
