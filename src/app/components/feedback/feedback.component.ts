import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedbackService } from '../../feedback.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  message : string;
  message1 : string;

  constructor(private feedbackService : FeedbackService) { }

  ngOnInit(): void {
  }

  postFeedback(form : NgForm){

    let userData = JSON.parse(localStorage.getItem('userData'));
    let uId = userData.data.userId; 

    this.feedbackService.postFeedback(form.value, uId).subscribe(response =>{
      console.log(response);
      if(response.error === true){
        this.message = response.message;
        setTimeout(()=>{
          this.message = null;
        }, 5000);
      } else {
        this.message1 = "Thanks for your Feedback !!";
        form.reset();
        setTimeout(()=>{
          this.message1 = null;
        }, 5000);
      }      
    });
  
  }


}
