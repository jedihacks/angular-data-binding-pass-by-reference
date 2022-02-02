import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/data-models/person.class';

@Component({
  selector: 'app-people-builder',
  templateUrl: './people-builder.component.html',
  styleUrls: ['./people-builder.component.scss']
})
export class PeopleBuilderComponent implements OnInit {
  public localArrayOfPeople: Person[] = [];
  @Input() _newArrayRef: Person[] = [];
  @Output() _newArrayRefChange = new EventEmitter<Person[]>();
  @Input() _originalArrayOfPeople: Person[] = [];
  @Output() _originalArrayOfPeopleChange = new EventEmitter<Person[]>();

  constructor() { }

  ngOnInit(): void {
    this.localArrayOfPeople.push(new Person('NEW #' + this.localArrayOfPeople.length));
  }

  addNewPersonToOriginal() {
    this._newArrayRef.push(new Person('NEW ' + this._newArrayRef.length));
  }

  addNewPersonToLocal() {
    this.localArrayOfPeople.push(new Person('NEW ' + this.localArrayOfPeople.length));
  }

  assignLocalToRef(){
    this._newArrayRef = this.localArrayOfPeople;
  }

}
