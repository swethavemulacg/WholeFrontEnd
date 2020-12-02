import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFeedbacksComponent } from './get-feedbacks.component';

describe('GetFeedbacksComponent', () => {
  let component: GetFeedbacksComponent;
  let fixture: ComponentFixture<GetFeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
