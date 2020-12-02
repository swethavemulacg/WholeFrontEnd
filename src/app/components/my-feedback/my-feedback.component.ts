import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../../feedback.service';

export interface Feedbacks{

  fId : number;
  name : string;
  expectations : string;
  policy : string;
  interaction :string;
  website : string;
  recommend : string;
  review : string;
  
}

@Component({
  selector: 'app-my-feedback',
  templateUrl: './my-feedback.component.html',
  styleUrls: ['./my-feedback.component.css']
})
export class MyFeedbackComponent implements OnInit {

  message : string;
  feedbacks : Feedbacks[];
  id : number;

  constructor(private feedbackService :FeedbackService, private router :Router) { 
    this.getMyFeedback(this.id);
  }

  getMyFeedback(id){
    let userData = JSON.parse(localStorage.getItem('userData'));
    id = userData.data.userId;
    this.feedbackService.getFeedback(id).subscribe(response =>{
      this.feedbacks = response;
      console.log(response);
    });
  }

  deleteFeedback(feedback){
    console.log(feedback);
    this.feedbackService.deleteData(feedback).subscribe(response =>{
    console.log(response);
    if(response.error === false){
      this.getMyFeedback(this.id);
      this.message = response.message;
      setTimeout(() =>{
        this.message = null;
      }, 5000);
    }
  });
}

selectFeedback(feedback){
  this.router.navigate(['/edit-feedback'], {queryParams : feedback});
}

  ngOnInit(): void {
  }

}
