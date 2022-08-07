import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/interfaces/login';
import { Register } from 'src/app/interfaces/register';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient,private router: Router) { }
  
  currentUser: any  = {};
  userToken: any = {};
  username: string = '';
  name: any;
  email: any;
  //create a login request using 
  login(users : Login) {
    return this.http.post(`${this.baseUrl}login`, users).subscribe({
      next:data =>{
        this.userToken = data
        localStorage.setItem('access_token', this.userToken.token)
        this.router.navigate(['/'])
        this.getUserProfile(this.userToken.token)
      } 
    })
  }

  //create a login request using 
  register(users : Register) {
    return this.http.post(`${this.baseUrl}register`, users).subscribe({
      next:data =>{
        this.userToken = data
        localStorage.setItem('access_token', this.userToken.token)
        this.router.navigate(['/'])
        this.getUserProfile(this.userToken.token)
      } 
    });
  }
  
  //get a token 
  getToken() {
    return localStorage.getItem('access_token');
  }
  
  //create a login request 
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  
  //Create a logout 
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['auth/login']);
    }
  }

  //create a get request for current logged in user
  //pass the token back to the backend to be decoded in order to receive current logged in user
  getUserProfile(token: any){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': `${token}` })
    };

    return this.http.get(`${this.baseUrl}profile`,httpOptions).subscribe({
      next:userinfor => {
        this.currentUser = userinfor
        this.name = this.transform(this.currentUser.decoded.fname) +" "+ this.transform(this.currentUser.decoded.lname)
        this.email = this.currentUser.decoded.email
      }
    })
  }

  //Transorm the first letter in to an Uppercase
  transform(value:string): string {
    let first = value.substr(0,1).toUpperCase();
    return first + value.substr(1); 
  }
}
