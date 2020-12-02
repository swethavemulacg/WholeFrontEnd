import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RefundServiceService } from '../../refund-service.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  message : string;
  message1 : string;

  constructor(private refundService : RefundServiceService) { }

  ngOnInit(): void {
  }

  postRefundData(form: NgForm){
    console.log(form.value)
    this.refundService.postData(form.value).subscribe(response =>{
      console.log(response);
      if(response.error === true){
        this.message = response.message;
        setTimeout(()=>{
          this.message = null;
        }, 5000);
      } else {
        console.log("inside the else block...");
        this.message1 = "Your request Added";
        form.reset();
        setTimeout(()=>{
          this.message1 = null;
        }, 5000);
      }      
    });
  }

}
