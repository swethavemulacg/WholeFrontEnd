import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  myURL = 'http://localhost:9090/arp/api';

  constructor(private http : HttpClient) { }

    postData(feedback){
      return this.http.post<any>(`${this.myURL}/addFeedback`, feedback);
    }
    
    postFeedback(feedback, uId){
      return this.http.post<any>(`${this.myURL}/addFeedback/${uId}`,feedback);
    }

    getData(){
      return this.http.get<any>(`${this.myURL}/getAllFeedbacks`);
    }

    getFeedback(uId){
      return this.http.get<any>(`${this.myURL}/myFeedback/${uId}`);
    }

    updateFeedback(feedback, id){
      return this.http.put<any>(`${this.myURL}/updateFeedback/${id}`, feedback);
    }
    
    deleteData(feedback){
      console.log(feedback.fid);
      console.log(`${this.myURL}/deleteFeedback/${feedback.fid}`);
      return this.http.delete<any>(`${this.myURL}/deleteFeedback/${feedback.fid}`);
    }
  

}
