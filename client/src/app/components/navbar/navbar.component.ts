import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;

  constructor(
    public auth:AuthenticateService
  ) { }

  ngOnInit(): void {
  }

  Logout(){
    this.auth.doLogout()
  }

}
