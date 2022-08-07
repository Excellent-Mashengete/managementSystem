import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../auth/service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth:AuthenticationService,
    private router: Router,) { }
    
    fullname: any;
    email: any

  ngOnInit(): void {
    console.log(this.auth.email)
  }
 
  Logout(){
    this.auth.doLogout()
  }

}
