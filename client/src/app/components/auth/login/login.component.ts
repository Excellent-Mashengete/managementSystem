import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { MessageService } from 'primeng/api';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  Form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  
  submitted = false; //bpplean
  userToken: any = {};

  constructor(private formBuilder: FormBuilder, 
    private auth:AuthenticationService, 
    private router:Router,
    private messageService: MessageService,) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    });
  }
  
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;//it traps errors in the form
  }

  onSubmit():void{
    this.submitted = true;// submit when the details are true/when form is not blank

    if(this.Form.invalid)
    { 
      return
    }
    let user = {
      email: this.Form.value.email,
      password: this.Form.value.password
    }
    this.auth.login(user).subscribe({
      next:data =>{
        this.userToken = data
        localStorage.setItem('access_token', this.userToken.token)
        //route to dashboard if login was successful
        this.router.navigate(['/dash'])

        //call user the getprofile function pass the token as an argument
        this.auth.getUserProfile(this.userToken.token)
      },
      error: err => {
        this.messageService.add({
          key: 'tc', severity:'error', summary: 'Error', detail: err.error.message, life: 3000
        });
        
      }
    })

    
  }
}