import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  myURL = 'http://ec2-3-129-128-11.us-east-2.compute.amazonaws.com:9090/arp-user/api';

  constructor(private http : HttpClient, private router : Router) { }
  
  postRegister(user){
    return this.http.post<any>(`${this.myURL}/register`, user);
  }

  postLogin(user){
    return this.http.post<any>(`${this.myURL}/login`, user);
  }

  getUser(cId){
    return this.http.get<any>(`${this.myURL}/user/${cId}`);
  }
  updateUser(user){
    return this.http.put<any>(`${this.myURL}/updateUser`, user);
  }
  updateData(email, password, user){
    return this.http.put<any>(`${this.myURL}/resetPassword/${email}/${password}`, user);
  }

  isUser() : boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.data.role === 'ROLE_USER'){
      return true;
    } else {
      return false;
    }
  }

  isAdmin() : boolean{
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.data.role === 'ROLE_ADMIN'){
      return true;
    } else {
      return false;
    }
  }

    isLogged() : boolean{
      const userData = JSON.parse(localStorage.getItem('userData'));
      if(userData){
        return true;
      } else {
        return false;
      }
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login-form');
  }



}
