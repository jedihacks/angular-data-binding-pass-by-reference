import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayExampleComponent } from './array-example.component';

describe('ArrayExampleComponent', () => {
  let component: ArrayExampleComponent;
  let fixture: ComponentFixture<ArrayExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
