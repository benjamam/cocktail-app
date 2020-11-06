import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedDrinkViewComponent } from './detailed-drink-view.component';

describe('DetailedDrinkViewComponent', () => {
  let component: DetailedDrinkViewComponent;
  let fixture: ComponentFixture<DetailedDrinkViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedDrinkViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedDrinkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
