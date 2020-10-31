import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkResultsComponent } from './drink-results.component';

describe('DrinkResultsComponent', () => {
  let component: DrinkResultsComponent;
  let fixture: ComponentFixture<DrinkResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
