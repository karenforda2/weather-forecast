import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 10DayForecastComponent } from './10-day-forecast.component';

describe('10DayForecastComponent', () => {
  let component: 10DayForecastComponent;
  let fixture: ComponentFixture<10DayForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 10DayForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(10DayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
