import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private router:Router,private authService: AuthService){}
  email:any;
  password:any;
  errorMessage!: string;

  clickSignup(){
    this.router.navigate(['/signup'])
  }
  formValidate(){
    if(this.email && this.password){
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
   }else{
    alert('invllid passsword')
   }

  //  if(user){
  //  this.router.navigate(['/dashboard'])
   }
   
  //  login(): void {
  // //  const userData = localStorage.getItem('userData')
  // //  console.log("userdatttta0",userDat);
  // this.router.navigate(['/dashboard'])
  //     const email = this.email;
  //     const password = this.password;

  //     this.authService.login(email, password).subscribe(
  //       (isValid) => {
  //         if (isValid) {
  //           // Redirect or perform other actions for successful login
  //           this.errorMessage = '';
  //         } else {
  //           this.errorMessage = 'Invalid email or password';
  //         }
  //       },
  //       (error) => {
  //         console.error(error);
  //         this.errorMessage = 'Error during login';
  //       }
  //     );
  //   }
  
  
  
  
}
