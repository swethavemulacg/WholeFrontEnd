import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  passwordType = 'password';
  passwordType1 = 'password';
  iconClass = 'fa fa-eye';
  iconClass1 = 'fa fa-eye';
  message : string;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  updatePassword(form : NgForm){

    let email = form.value.email;
    let password = form.value.password;

    this.userService.updateData(email,password,form.value).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        form.reset();
        this.router.navigateByUrl('/login-form');
      }
      if(response.error === true){
        this.message = response.message;
      }
    });
  }

  login(){
    this.router.navigate(['/login-form']);
  }

  showPassword(){
    if(this.passwordType === 'password'){
      this.passwordType = 'text';
      this.iconClass = 'fa fa-eye-slash'
    } else {
      this.passwordType = 'password';
      this.iconClass = 'fa fa-eye'
    }
  }

  showPassword1(){
    if(this.passwordType1 === 'password'){
      this.passwordType1 = 'text';
      this.iconClass1 = 'fa fa-eye-slash'
    } else {
      this.passwordType1 = 'password';
      this.iconClass1 = 'fa fa-eye'
    }
  }

}
