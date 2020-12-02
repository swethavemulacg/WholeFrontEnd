import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../feedback.service';

export interface Feedbacks{

  fid : number;
  name : string;
  expectations : string;
  policy : string;
  interaction :string;
  website : string;
  recommend : string;
  review : string;

}

@Component({
  selector: 'app-get-feedbacks',
  templateUrl: './get-feedbacks.component.html',
  styleUrls: ['./get-feedbacks.component.css']
})
export class GetFeedbacksComponent implements OnInit {

  message : string;
  feedbacks : Feedbacks[];
  searchValue;
  searchBy="interaction";

  constructor(private feedbackService : FeedbackService) {
    this.getFeedbacks();
   }

  ngOnInit(): void {
  }

  getFeedbacks(){
    this.feedbackService.getData().subscribe(response =>{
      this.feedbacks = response;
    });

  }

}
