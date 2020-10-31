import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoInputComponent } from './basic-info-input.component';

describe('BasicInfoInputComponent', () => {
  let component: BasicInfoInputComponent;
  let fixture: ComponentFixture<BasicInfoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInfoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
