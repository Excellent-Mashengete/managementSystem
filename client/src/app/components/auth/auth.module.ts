import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AuthComponent } from './auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'auth', component:AuthComponent,
  children:[
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'', redirectTo:'/login', pathMatch:'full'}
  ]},
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [ MessageService, ConfirmationService],
})
export class AuthModule { }
