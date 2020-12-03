import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingRefundDTO } from './components/refund-policies/refund-policies.component';

@Injectable({
  providedIn: 'root'
})
export class RefundServiceService {

 // myURL = 'http://localhost:9090/AirlineRefundPolicy/api';
  myURL1="http://localhost:9090/AirlineRefundPolicy/api";

  constructor(private http : HttpClient) { }

    postData(AirlineRefundPolicy){
      return this.http.post<any>(`${this.myURL1}/refundpolicy`, AirlineRefundPolicy);
    }

    getData(){
      return this.http.get<any>(`${this.myURL1}/all`);
    }

    deletePolicy(id:number){
      return this.http.delete<any>(`${this.myURL1}/policies/`+id);
    }

    getRefundData(bookingId: number){
      return this.http.get<BookingRefundDTO[]>(`${this.myURL1}/booking/`+bookingId);
    }

}
