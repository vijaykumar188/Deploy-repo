import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private router:Router,private snackbar:MatSnackBar){}

  
  email:any;
  password:any;
  name:any
  phone:any

  isValidEmail(email: string): boolean {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    return emailRegex.test(email);
  }

  isValidPassword(password: any): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
 
  formValidate(){
    if(this.isValidEmail(this.email) === true && this.isValidPassword(this.password) === true && this.name && this.phone){
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
    localStorage.setItem('userName',this.name);
    this.snackbar.open('User Added Succesfully', '',{panelClass: 'snackbar',duration:3000,verticalPosition:'top'})
    this.reset();
  }

  loginClick(){
    this.router.navigate(['/login'])
  }
  reset(){
    this.email = ''
    this.password = ''
    this.phone = '' 
    this.name=''
   }

  

}
