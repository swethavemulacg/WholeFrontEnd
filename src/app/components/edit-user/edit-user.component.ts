import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  passwordType = 'password';
  iconClass = 'fa fa-eye';

  UserToUpdate;
  message : string;
  message1 : string;

  constructor(private userService : UserService, private route :ActivatedRoute, 
    private router : Router) {
      this.route.queryParams.subscribe(response =>{
        this.UserToUpdate = response;
        console.log(this.UserToUpdate); 
      });
     }

  updateUser(form :NgForm){

    this.userService.updateUser(form.value).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.message1 = response.message1;
        setTimeout(() => {
          this.message1 = null;
        }, 5000);
        this.router.navigateByUrl('/profile');
      }
      if(response.error === true){
        this.message = response.message;
        setTimeout(() => {
          this.message = null;
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

  goBack(){
    this.router.navigate(['/profile']);
  }

  ngOnInit(): void {
  }

}
