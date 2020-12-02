import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundPoliciesComponent } from './refund-policies.component';

describe('RefundPoliciesComponent', () => {
  let component: RefundPoliciesComponent;
  let fixture: ComponentFixture<RefundPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
