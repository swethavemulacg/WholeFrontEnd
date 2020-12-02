import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../../booking-service.service';
import { FlightDetails } from '../../flight-details';
import { NgForm } from '@angular/forms';
import { BookingDetails } from '../../booking-details';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  constructor(private bookingService:BookingServiceService) { }
  ngOnInit(): void {
  }
  /*This array will store the flight details to render on front end */
  flights:FlightDetails[]=[];

  /* This var is used to store the flight id for further use in book ticket form */
  flightId:number;

  /*This reference of bookingDetails class is use to get the values from that */
  bookingDetails:BookingDetails=new BookingDetails();

  /* This var is used to store the flight from for further use in book ticket form */
  from:String;

  /* This var is used to store the flight to for further use in book ticket form */
  to:String;

  /*THis is used to show the div if any error comes from backend */
  errorVarForData=false;

  /*This is use to show or hide the booking form div from webpage */
  showBookingDiv=false;

  /*This is used to show or hide the flight search div from webpage */
  showSearchDiv=true;

  /*This var is used to store the error message from backend if there is no flight */
  errorMessage;

  /*This is used to show or hide div for successfull message*/
  showModal=false;

  /*This var is used to store the success message from backend */
  bookingSuccessMessage:any;

  /* This is used to store the message from backend if age is less than zero */
  errorMessageWhileBooking;

  /*This is used to show div with message age less than zero  */
  errorMessageWhileBookingDiv=false;
  compareDate=formatDate(new Date(), 'dd-MM-yyyy', 'en');
  
  /* This method will show the booking ticket div and will hide the seach flight div */
  toggleBooking(flights):void
  {
    this.flightId=flights.flightId;
    this.bookingDetails.flightFrom=flights.flightFrom;
    this.bookingDetails.flightTo=flights.flightTo;
    this.bookingDetails.costOfTicket=flights.ticketCost;
    this.bookingDetails.timeOfFlight=flights.flightTiming;
    if(this.showBookingDiv==false && this.showSearchDiv==true)
     {        
      this.showSearchDiv=false;
      this.showBookingDiv=true;
      this.errorVarForData=false;
     }
  }

  /* This method will be called when user will click on back button while booking ticket */
  toggleShowList():void
  {
    if(this.showBookingDiv==true && this.showSearchDiv==false)
     { 
      window.location.reload();
     }
  }

/*This method will be called when user will click on okay after successfully booking 
   the ticket */
   closeModal()
   {
     this.showModal=false;
     window.location.href="/showBookingHistoryForUser";
   }

  /* This method will be called when user will click on book ticket after entering all
  deails */ 
  addBooking(form:NgForm)
  {
       this.bookingService.bookTicket(this.bookingDetails,"ashok@capgemini.com",this.flightId).subscribe(data=>
        {
          this.bookingSuccessMessage=data;
          this.errorMessageWhileBookingDiv=false;
          this.showModal=true;
        },

        error=>{
          console.log(error);
          this.errorMessageWhileBookingDiv=true;
          this.errorMessageWhileBooking=JSON.parse(error.error).message;
          setTimeout(() => {
            this.errorMessageWhileBookingDiv= false;
          }, 3000);
        }
       );
  }

  /* This method will be called when user will click on search flight after 
  entering all correct details */
  searchFlight(data:any){
    this.bookingService.searchFlight(data.from,data.to).subscribe(data=>{
      this.errorVarForData=false;
      this.flights.length=0;
      this.flights=JSON.parse(data);

  },
    error=>{console.log(error);
      this.flights.length=0;
      this.errorVarForData=true;
      this.errorMessage=JSON.parse(error.error).message;

    }
  );;
  }

  /*This method is used to validate the date of toady and past*/
  getToday(): string {
    var to=new Date();
    /*The built-in toISOString method that brings this date to the ISO 8601 format( 2020-11-27)
    *.split("T") splits the string to array
    **/
    return new Date(to.getTime()+86400000).toISOString().split('T')[0];
 }

 

}
