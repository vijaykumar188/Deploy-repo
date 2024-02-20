import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

constructor(private router:Router,private authService: AuthService,private snackbar:MatSnackBar){}

  email:any;
  password:any;
  errorMessage!: string;


  isValidEmail(email: string): boolean {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    return emailRegex.test(email);
  }

  isValidPassword(password: any): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  clickSignup(){
    this.router.navigate(['/signup'])
  }

  formValidate(){
    if(this.isValidEmail(this.email) === true && this.password){
      return false;
    }else{
      return true;
    }
  }

  login(){
    
    let userDataEmail = localStorage.getItem('userEmail')
    let userDataPassword = localStorage.getItem('userpassword')
   
   if(userDataEmail === this.email && userDataPassword === this.password){
    this.router.navigate(['/dashboard'])
    Swal.fire('Logged In','Login succesfully','success')
    this.snackbar.open('Login succesfully', '',{panelClass: 'snackbar',duration:3000,verticalPosition:'top'})
    this.reset()
   }else{
    Swal.fire('Invllid passsword')
    this.snackbar.open('Invllid passsword', '',{panelClass: 'snackbar',duration:3000,verticalPosition:'top'})
    this.reset();
   }
   }


   reset(){
    this.email = ''
    this.password = ''
   }

   redirectToGitHub(){
    window.open('https://github.com/vijaykumar188/Deploy-repo')
   }
   
  
}
