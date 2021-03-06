import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordType = 'password';
  iconClass = 'fa fa-eye';

  defaultValue = "ROLE_USER";

  message : string;
  message1 : string;

  constructor(private userService : UserService) { }

  postUser(form:NgForm){
    this.userService.postRegister(form.value).subscribe(response =>{
      console.log(response);
      if(response.error === true){
        this.message = response.message;
        setTimeout(()=>{
          this.message = null;
        }, 5000);
      } else {
        this.message1 = "User Added Successfully";
        form.reset();
        setTimeout(()=>{
          this.message1 = null;
        }, 5000);
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


  ngOnInit(): void {
  }

}
