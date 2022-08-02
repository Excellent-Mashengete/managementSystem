import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router} from '@angular/router';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';
import { MustMatch } from './utils/validation';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class RegisterComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;

  constructor(private auth:AuthenticateService, private route:Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,  
    private confirmationService: ConfirmationService) { }


  Form = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  submitted = false;

  ngOnInit(): void {
    this.loading = false;
    this.Form = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmPassword: ['', Validators.required],
    },{
      validator:MustMatch("password","confirmpassword"),
    }

    );
  }

  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }
  
  keyPressAlphanumeric(event: { keyCode: number; preventDefault: () => void; }) {
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault(); //Prevent users from
      return false;
    }
  }

  register(){
    this.loading = false;
    this.submitted = true;

    if(this.Form.invalid)
    { 
      this.loading = false;
      return //return errors from the login 
    }

    let user = {
      fname : this.Form.value.name,
      lname : this.Form.value.name,
      email: this.Form.value.email,
      password : this.Form.value.password
    } //Load the data from the form

    this.loading = true;
    this.auth.register(user).subscribe({ //Subscribe to the api endpoint
      next:data => {
        this.submitted = false;
        this.loading = false; //if the login is successful don't show the loading progress
        this.Form.reset(); //reset the form before redirecting to login if user successfully registred
        this.route.navigate(['/login']); //re-routes to dashboard if login successfully
      },
      error: err => {
        this.loading = true;
        this.messageService.add({
          severity:'success', summary: 'Successful', detail: err.error.message , life: 3000
        }) //Trap  the errors if user logins are incorrect
        this.loading = false;
      }
    });
  }
}
