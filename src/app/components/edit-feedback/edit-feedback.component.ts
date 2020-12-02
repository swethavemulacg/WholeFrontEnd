import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../feedback.service';


@Component({
  selector: 'app-edit-feedback',
  templateUrl: './edit-feedback.component.html',
  styleUrls: ['./edit-feedback.component.css']
})
export class EditFeedbackComponent implements OnInit {

  FeedbackToUpdate;
  message : string;
  message1 : string;

  constructor(private route : ActivatedRoute, private feedbackService : FeedbackService,
    private router : Router) {
      this.route.queryParams.subscribe(response =>{
      this.FeedbackToUpdate = response;
      console.log(this.FeedbackToUpdate); 
    });
  }

  updateFeedback(form : NgForm){

    let userData = JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.userId; 

    this.feedbackService.updateFeedback(form.value, id).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.message1 = response.message1;
        setTimeout(() => {
          this.message1 = null;
        }, 5000);
        this.router.navigateByUrl('/my-feedback');
      }
      if(response.error === true){
        this.message = response.message;
        setTimeout(() => {
          this.message = null;
        }, 5000);
      }
    });
  }

  goBack(){
    this.router.navigate(['/my-feedback']);
  }


  ngOnInit(): void {
  }

}
