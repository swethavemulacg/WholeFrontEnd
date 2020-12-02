import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message : string;
  passwordType = 'password';
  iconClass = 'fa fa-eye';
  
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  loginDetails(form : NgForm){
    this.userService.postLogin(form.value).subscribe(response =>{
      console.log(response);
      if(response.error){
        this.message = response.message;
        setTimeout(()=>{
          this.message = null;
        },5000);
      } else {
        localStorage.setItem('userData',JSON.stringify(response));
        if(response.data.role === "ROLE_ADMIN"){
          this.router.navigateByUrl('/home');
        } else if(response.data.role ==="ROLE_USER"){
          this.router.navigateByUrl('/customer');
        }
      }
    });
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

}
