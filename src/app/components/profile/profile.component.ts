import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

export interface User{

  userId : number
  firstName : string;
  lastName : string;
  gender : string;
  email : string;
  mobileNumber : string;
  userName : string;

}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users;
  cId : number;

  constructor(private userService : UserService, private router : Router) {
    this.getUsers(this.cId);
   }

   getUsers(cId){
    let userData = JSON.parse(localStorage.getItem('userData'));
    cId = userData.data.userId;
    this.userService.getUser(cId).subscribe(response =>{
      console.log(response);
      this.users = response.data;
    });
  }

  selectUser(users){
    this.router.navigate(['/edit-profile'], {queryParams : users})
  }

  ngOnInit(): void {
  }

  

}
