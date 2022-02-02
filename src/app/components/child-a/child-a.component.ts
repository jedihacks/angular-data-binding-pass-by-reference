import { Component, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/data-models/person.class';
import {EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {
  @Input() _person!: Person;
  @Output() _personChange = new EventEmitter<Person>();
  
  constructor() { }

  ngOnInit(): void {
    console.log('ChildA', 'ngOninit(), _person:', this._person.name);
  }

  changeNameToJedi(){
    this._person.name = 'JEDI';
  }
}
