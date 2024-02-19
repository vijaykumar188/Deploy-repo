import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private router:Router){}

  
  email:any;
  password:any;

 
  formValidate(){
    if(this.email && this.password){
      return false;
    }else{
      return true;
    }

  }
  

  signUpClick(){
    // this.router.navigate(['/dashboard'])
    // const payload = {
    //  'email': this.email,
    //   'password':this.password
    // }

    localStorage.setItem('userEmail',this.email);
    localStorage.setItem('userpassword',this.password);
  }

  loginClick(){
    this.router.navigate(['/login'])
  }

}
