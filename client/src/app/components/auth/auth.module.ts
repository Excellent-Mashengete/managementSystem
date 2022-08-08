//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AuthComponent } from './auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//Primeng Imports
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

//Guards 
import { LoggedGuard } from 'src/app/auth-guards/logged.guard';


const routes: Routes = [
  {path:'auth', component:AuthComponent, 
  children:[
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'', redirectTo:'/auth/login', pathMatch:'full'}
  ], canActivate: [LoggedGuard]},
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
    ToastModule,
    RouterModule.forChild(routes)
  ],
  providers: [ MessageService],
})
export class AuthModule { }
