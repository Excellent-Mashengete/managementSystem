import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router} from '@angular/router';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class LoginComponent implements OnInit {
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

  currentUser = {};
  userToken: any = {}
  submitted = false;
  
  ngOnInit(): void {
    this.loading = false;
    this.Form = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmPassword: ['', Validators.required],
    });
  }

  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }
  
  keyPressAlphanumeric(event: { keyCode: number; preventDefault: () => void; }) {
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
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
      email: this.Form.value.email,
      password : this.Form.value.password
    } //Load the data from the form

    this.loading = true;
    this.auth.login(user).subscribe({ //Subscribe to the api endpoint
      next:data =>{
        this.loading = true;
        this.userToken = data //pass data from api into usertoken 
        localStorage.setItem('access_token', this.userToken.token)//Store the token in local storage
        this.loading = false; //if the login is successful don't show the loading progress
        this.route.navigate(['/dashboard']) //re-routes to dashboard if login successfully
      },
        error: err => {
          this.submitted = false;
          this.messageService.add({
            severity:'error', summary: 'Error', detail: err.error.message , life: 3000
          }) //Trap  the errors if user logins are incorrect
          this.loading = false;          
        }
      }
    ) 
  }
}
