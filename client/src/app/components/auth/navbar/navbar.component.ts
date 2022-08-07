import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth:AuthenticationService,
    private router: Router,) { }

  ngOnInit(): void {
  }
  fullname = 'excellent';
  email = 'excellent@gmail.com'

  Logout(){
    this.auth.doLogout()
  }

}
