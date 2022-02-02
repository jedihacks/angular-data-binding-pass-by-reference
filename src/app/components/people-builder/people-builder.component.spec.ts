import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleBuilderComponent } from './people-builder.component';

describe('PeopleBuilderComponent', () => {
  let component: PeopleBuilderComponent;
  let fixture: ComponentFixture<PeopleBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
