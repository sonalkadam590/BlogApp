import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fullName = '';
  email = '';
  password = '';
  phone_no = '';
  address='';
  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  onSignup() {
    if (this.fullName.length == 0) {
      alert('enter first name');
    } 
     else if (this.email.length == 0) {
      alert('enter email');
    } else if (this.password.length == 0) {
      alert('enter password');
    } else if (this.phone_no.length == 0) {
      alert('enter phone no ');
    }
      else if (this.address.length == 0) {
        alert('enter Address');
    }  else {
      this.userService
        .signup(this.fullName, this.email, this.password,this.phone_no,this.address)
        .subscribe(response => {
          const body = response.json();
          if (body['status'] == 'success') {
            this.router.navigate(['/login']);
          } else {
            alert('error while registering a user');
          } 
         // this.router.navigate(['/movie-add']);

        });
    }
  }

  onCancel() {
    this.router.navigate(['/login']);
  }

}
