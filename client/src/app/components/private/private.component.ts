import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../auth/service/authentication.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';
import { EmployeesService } from './service/employees.service';

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


  currentUser: any  = {};
  name : string = '';
  email : string = '';
  term = '';
  constructor( public auth:AuthenticationService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getUserInfor();
  }

  Logout(){
    this.auth.doLogout()
  }

  getUserInfor(){
    return this.auth.getUserProfile().subscribe({
      next:userinfor => {
        this.currentUser = userinfor;
        this.name = this.transform(this.currentUser.decoded.fname) +" "+ this.transform(this.currentUser.decoded.lname);
        this.email = this.currentUser.decoded.email;
        localStorage.setItem('email', this.email)
        localStorage.setItem('name', this.name)
  
      }
    })
  }

    //Transorm the first letter in to an Uppercase
  transform(value:string): string {
    let first = value.substr(0,1).toUpperCase();
    return first + value.substr(1); 
  }
}
