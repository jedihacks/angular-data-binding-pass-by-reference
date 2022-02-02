import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/data-models/person.class';

@Component({
  selector: 'app-people-builder',
  templateUrl: './people-builder.component.html',
  styleUrls: ['./people-builder.component.scss']
})
export class PeopleBuilderComponent implements OnInit {
  public newArrayOfPeople: Person[] = [];
  @Input() _originalArrayOfPeople: Person[] = [];
  @Output() _originalArrayOfPeopleChange = new EventEmitter<Person[]>();

  constructor() { }

  ngOnInit(): void {
    this.newArrayOfPeople.push(new Person('NEW #' + this.newArrayOfPeople.length));
  }

  addNewPersonToOriginal() {
    this.newArrayOfPeople.push(new Person('NEW ' + this.newArrayOfPeople.length));
  }

  assignNewObject(){

  }

}
