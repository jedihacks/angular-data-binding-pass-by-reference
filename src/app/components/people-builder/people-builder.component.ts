import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/data-models/person.class';

@Component({
  selector: 'app-people-builder',
  templateUrl: './people-builder.component.html',
  styleUrls: ['./people-builder.component.scss']
})
export class PeopleBuilderComponent implements OnInit {
  public localArrayOfPeople: Person[] = [];

  @Input() _originalArrayOfPeople: Person[] = [];
  @Output() _originalArrayOfPeopleChange = new EventEmitter<Person[]>();

  constructor() { }

  async ngOnInit() {
    this.localArrayOfPeople.push(await Person.build('NEW #' + this.localArrayOfPeople.length));
  }

  async addNewPersonToOriginal() {
    this._originalArrayOfPeople.push(await Person.build('NEW ' + this._originalArrayOfPeople.length));
  }

  async addNewPersonToLocal() {
    this.localArrayOfPeople.push(await Person.build('NEW ' + this.localArrayOfPeople.length));
  }

  assignLocalToRef(){
    console.warn('originalArrayofPeople:', this._originalArrayOfPeople);
    console.warn('localArrayOfPeople:', this._originalArrayOfPeople);

    // The variable IN People-Builder that is NAMED originalArrayOfPeople permamently has it's own memory location
    // So, when we set originalArray = this.localArray, we are NOT changing the original memory location. 
    // We are simply swapping the reference value in THIS function.
    this._originalArrayOfPeople = this.localArrayOfPeople;

    // ACTION ITEM - NEED TO SEARCH FOR ALL INSTANCES OF GAMESTATE = OTHER GAME STATE, and REMOVE IT.
    console.warn('originalArrayofPeople:', this._originalArrayOfPeople);
    console.warn('localArrayOfPeople:', this._originalArrayOfPeople);
  }

}
