import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { MustMatch } from './utils/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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
  submitted = false; //bpplean
 
  constructor(private formBuilder: FormBuilder, 
    public auth:AuthenticationService, 
    private router:Router) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmpassword: ['', Validators.required],
    },{
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
    let user = {
      fname: this.Form.value.fname,
      lname: this.Form.value.lname,
      email: this.Form.value.email,
      password: this.Form.value.password
    }
    
    this.router.navigate(['/'])
  }

}
