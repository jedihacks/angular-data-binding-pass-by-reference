import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/data-models/person.class';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {
  @Input() _person!: Person;
  @Output() _personChange = new EventEmitter<Person>();
  
  constructor() { }

  ngOnInit(): void {
    console.log('ChildB', 'ngOninit(), _person:', this._person.name);
  }

  changeNameToMJ(){
    console.log('Changing name to MJ');
    this._person.name = 'MJ';
  }
}
