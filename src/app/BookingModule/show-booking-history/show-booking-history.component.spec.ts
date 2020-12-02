import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookingHistoryComponent } from './show-booking-history.component';

describe('ShowBookingHistoryComponent', () => {
  let component: ShowBookingHistoryComponent;
  let fixture: ComponentFixture<ShowBookingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBookingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBookingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
