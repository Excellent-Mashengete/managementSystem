import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class LoginComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
  }
}