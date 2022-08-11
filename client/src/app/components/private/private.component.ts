import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/service/authentication.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;


  term = '';
  constructor( public auth:AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
  }

  Logout(){
    this.auth.doLogout()
  }

}
