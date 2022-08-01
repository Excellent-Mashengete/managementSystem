import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { OneMovieComponent } from './components/one-movie/one-movie.component';

const routes: Routes = [
  {path:'', redirectTo:'movies', pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'register', component:RegisterComponent, pathMatch:'full'},
  {path:'onemovie/:id', component:OneMovieComponent, pathMatch:'full'},
  // {path:'', component:RegisterComponent, pathMatch:'full'},
  // {path:'', component:RegisterComponent, pathMatch:'full'},
  // {path:'', component:RegisterComponent, pathMatch:'full'},
  // {path:'', component:RegisterComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
