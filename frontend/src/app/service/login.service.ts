import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, catchError, of, tap } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private dataSubject = new Subject<void>();

  constructor(private http: HttpClient, private router: Router) {}

  login(user: User) {
    this.http
      .post<any>('http://localhost:3000/login', user)
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', user.email);
          this.router.navigate(['/dashboard']);
          this.triggerGetData();
        }),
        catchError((error) => {
          console.error('Login error:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.router.navigate(['/login']);
  }

  triggerGetData() {
    this.dataSubject.next();
  }

  getDataObservable() {
    return this.dataSubject.asObservable();
  }
}
