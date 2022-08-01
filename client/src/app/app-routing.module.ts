import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', redirectTo:'movies', pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'register', component:RegisterComponent, pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent, pathMatch:'full'},
  // {path:'', component:RegisterComponent, pathMatch:'full'},
  // {path:'', component:RegisterComponent, pathMatch:'full'},
  // {path:'', component:RegisterComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
