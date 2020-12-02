import { Component, OnInit } from '@angular/core';
import { RefundServiceService } from '../../refund-service.service';

export interface Refund {
  policyID: number;
  timePeriod: number;
  refundPercentage: number;
  airlineName: string;
}


@Component({
  selector: 'app-view-policies',
  templateUrl: './view-policies.component.html',
  styleUrls: ['./view-policies.component.css']
})
export class ViewPoliciesComponent implements OnInit {

  refunds: Refund[];

  constructor(private refundService: RefundServiceService) { }

  ngOnInit(): void {
    this.refundService.getData().subscribe(
      data => {
        this.refunds = data;
      }

    );
  }

  deletePolicy(id: number) {
    this.refundService.deletePolicy(id).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

  refreshData(){
    this.refundService.getData().subscribe(
      data => {
        this.refunds = data;
      });
  }



}
