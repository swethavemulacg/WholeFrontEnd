import { Component, OnInit } from '@angular/core';
import { RefundServiceService } from '../../refund-service.service';

export interface BookingRefundDTO {

  bookingId: number;
  flightFrom: String;
  flightTo: String;
  passengerAge: String;
  passengerName: String;
  refundAmount: number;
  ticketCost: number;

}

@Component({
  selector: 'app-refund-policies',
  templateUrl: './refund-policies.component.html',
  styleUrls: ['./refund-policies.component.css']
})
export class RefundPoliciesComponent implements OnInit {

  bookingId: number;
  refundDetails: BookingRefundDTO[];
  constructor(private refundService: RefundServiceService) { }

  ngOnInit(): void {
  }

  getRefund(){
      console.log("booking Id is:"+this.bookingId);
      this.refundService.getRefundData(this.bookingId).subscribe(
        data=>{
          console.log(data[0]);
          this.refundDetails = data;
        },
        err=>console.log(err)
      )
  }

}
