import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 
import { AuthenticationService } from 'src/app/components/auth/service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class RegisterComponent implements OnInit {
  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
   
  }

}