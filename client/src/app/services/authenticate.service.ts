import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable  } from 'rxjs';
import { Login } from '../interfaces/login';
import { Register } from '../interfaces/register';

const token = localStorage.getItem('access_token');
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': `${token}` })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient,private router: Router) { }

  login(users : Login): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, users)
  }

  register(users : Register) {
    return this.http.post(`${this.baseUrl}register`, users);
  }
  
  getToken() {
    return localStorage.getItem('access_token');
  }
  
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['products']);
    }
  }
}
