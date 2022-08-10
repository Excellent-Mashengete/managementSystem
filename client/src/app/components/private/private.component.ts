import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/service/authentication.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  constructor( public auth:AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  Logout(){
    this.auth.doLogout()
  }

}
