import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { MustMatch } from './utils/validation';
import { MessageService } from 'primeng/api';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  Form = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
  });

  currentUser = {};
  userToken: any = {}
  submitted = false; 
 
  constructor(private formBuilder: FormBuilder, 
    public auth:AuthenticationService, 
    private router:Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmpassword: ['', Validators.required],
    },{//Compares the two passwprds if they match
      validator:MustMatch("password","confirmpassword"),
    }

    );
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
    let user = {//assign all entered values in the form to a variable user
      fname: this.Form.value.fname,
      lname: this.Form.value.lname,
      email: this.Form.value.email,
      password: this.Form.value.password
    }

    this.auth.register(user).subscribe({
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
