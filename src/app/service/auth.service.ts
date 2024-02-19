import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);


  
  // Observable to check authentication status
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  login(email: string, password: string): Observable<boolean> {

const userData = localStorage.getItem('userData')
    // Simulate asynchronous login check
    return new Observable<boolean>((observer) => {
      // Mock authentication logic
      const isValid = email === 'test@example.com' && password === 'password123';

      // Simulate delay for API request
      setTimeout(() => {
        this.isAuthenticatedSubject.next(isValid);
        observer.next(isValid);
        observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
}
