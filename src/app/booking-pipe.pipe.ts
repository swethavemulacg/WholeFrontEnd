import { Pipe, PipeTransform } from '@angular/core';
import { ShowBookingHistoryComponent } from './BookingModule/show-booking-history/show-booking-history.component';
import { ShowBookingHistoryForLoggedInUserComponent } from './BookingModule/show-booking-history-for-logged-in-user/show-booking-history-for-logged-in-user.component';

@Pipe({
  name: 'bookingPipe'
})
export class BookingPipePipe implements PipeTransform {

  /*
  This will give us the desiered output 
  */
  transform(value: any, searchValue:any): any {
    /*
    When there will be no values then it will return all values 
    */
    if(searchValue==""|| searchValue==null){
      return value;
    }

    /*
    When there will be something in the input then this will work 
    As you can search by name of passenger which will mactch each character and 
    You can search by flight id or userid it will show output after matching each digit

    */
    else{
          
      return value.filter(function(search){
         return search.nameOfPassenger.toLowerCase().indexOf(searchValue.toLowerCase())>-1
          || (search.flightDetails.flightId==searchValue)==true
          || (search.userDetails.userId==searchValue)==true
          ||(search.bookingId==searchValue)==true;
      });
    }
  }


}
