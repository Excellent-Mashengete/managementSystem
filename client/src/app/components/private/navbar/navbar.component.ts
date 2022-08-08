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
    public auth:AuthenticationService,
    private router: Router) { }
    
    email: any;
  ngOnInit(): void {
  }
 
  Logout(){
    this.auth.doLogout()
  }

}
