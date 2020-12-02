import { Component, OnInit } from '@angular/core';
import { RefundServiceService } from '../../refund-service.service';

export interface Refund {
  policyID: number;
  timePeriod: number;
  refundPercentage: number;
  airlineName: string;
}

@Component({
  selector: 'app-my-policies',
  templateUrl: './my-policies.component.html',
  styleUrls: ['./my-policies.component.css']
})
export class MyPoliciesComponent implements OnInit {

  refunds: Refund[];

  constructor(private refundService: RefundServiceService) { }

  ngOnInit(): void {
    this.refundService.getData().subscribe(
      data => {
        this.refunds = data;
      }
    );
  }

}
