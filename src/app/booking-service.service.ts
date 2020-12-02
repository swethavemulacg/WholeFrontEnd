import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingDetails } from './booking-details';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

   myURL1="http://localhost:8089/api";
  constructor(private http:HttpClient) { }

  bookingHistory():Observable<any>
  {
    return this.http.get("http://localhost:8089/viewBookingHistory",{responseType:'text'});
  }

  //Non blocking asynchronous data
  bookingHistoryForUser(userId):Observable<any>
  {

    return this.http.get("http://localhost:8089/viewBookingHistoryForUser/"+userId,{responseType:'text'});
  }

  cancellbooking(bookingId):Observable<any>
  {
    return this.http.delete("http://localhost:8089/cancelBooking/"+bookingId,{responseType:'text'});
  }

  searchFlight(from,to):Observable<any>
  {
    return this.http.get("http://localhost:8089/viewFlightsBetweenCities/"+from+"/"+to,{responseType:'text'});
  }

  bookTicket(bookingDetails:BookingDetails,userId:any,airlineId:any):Observable<any>
  { 
    return this.http.post("http://localhost:8089/bookFlight/"+userId+"/"+airlineId,bookingDetails,{responseType:'text'});
  }
}
