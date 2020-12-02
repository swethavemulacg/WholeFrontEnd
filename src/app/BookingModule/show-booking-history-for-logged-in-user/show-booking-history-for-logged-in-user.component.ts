import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../../booking-service.service';
import { BookingDetails } from '../../booking-details';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-show-booking-history-for-logged-in-user',
  templateUrl: './show-booking-history-for-logged-in-user.component.html',
  styleUrls: ['../show-booking-history/show-booking-history.component.css']
})
export class ShowBookingHistoryForLoggedInUserComponent implements OnInit {

  constructor(private bookingService:BookingServiceService) { }

  /* This var will show loading as output till the time any message comes from backend */
  loading = true;

  /*THis is used to show the div if any error comes from backend */
  errorVarForData=false;

  /*This array will store the booking history to render on front end */
  bookingHistory:BookingDetails[]=[];

  /*This var is used to store the error message from backend if booking history is not there */
  errorMessage;

  /*THis var is used to store the value of input from pipe to filter input */
  searchValue:any;
  
  /*This var is used to check the condition for showing the model to cancell ticket  */
  showModal:any=false;
  
  /*This var is used to store the booking id so it can be transfered to appropriate method after confirmation of user   */
  bookingId:any;

  /*This var is used to compare the dates so user will not be able to cancell the ticket once time has expired*/
  compareDate=formatDate(new Date(), 'yyyy-MM-dd', 'en');
  
  /* This function will be called for confirmation if user wants to cancell the ticket or not */
  openDialog(bookingIdd)
  {
    this.bookingId=bookingIdd;
    this.showModal=true;
    }

  /* This function will be called to close the div if user does not  want to cancell the ticket */
  closeDialog()
  {
    this.showModal=false;
  }

  /* This method will be called when user finally click on okay to cancell the ticket*/
  cancellBooing()
  {
    this.bookingService.cancellbooking(this.bookingId).subscribe(data=>{
        window.location.reload();
    },
      error=>console.log(error));
  }

  /*This method will be called automatically while loading the component */
  ngOnInit(): void {

    /* It will store the value of localstorage */
    let userData = JSON.parse(localStorage.getItem('userData'));

    /* It will extract and store the email value from userData */
    let emailId = userData.data.email;
    
    /* it will call the method from service to get the booking history if present */
    this.bookingService.bookingHistoryForUser(emailId).subscribe(data=>{

    /* It will store the booking history into array to show on webpage */ 
      this.bookingHistory=JSON.parse(data);

    /* It will make the loading div as false to appropriate thing can be shown to user */
      this.loading=false;
    },
    error=>
    {
      console.log("erroor occured",error);
    
    /*IT will make the div to show the message came from backend as history does not exists */
      this.errorVarForData=true;

    /* It will make the loading div as false to appropriate thing can be shown to user */
      this.loading=false;

    /* The exception message will be stored here to show that message to user 
      *JSON.parse() takes a JSON string and transforms it into a JavaScript object and from that object we got message. 
      */
      this.errorMessage=JSON.parse(error.error).message;
    }
  );
  
  }

}
