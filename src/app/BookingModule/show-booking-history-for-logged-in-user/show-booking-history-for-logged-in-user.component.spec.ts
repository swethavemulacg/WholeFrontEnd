import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookingHistoryForLoggedInUserComponent } from './show-booking-history-for-logged-in-user.component';

describe('ShowBookingHistoryForLoggedInUserComponent', () => {
  let component: ShowBookingHistoryForLoggedInUserComponent;
  let fixture: ComponentFixture<ShowBookingHistoryForLoggedInUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBookingHistoryForLoggedInUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBookingHistoryForLoggedInUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
