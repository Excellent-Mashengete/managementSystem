//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrivateComponent } from './private.component';
import { FooterComponent } from './footer/footer.component';

//Guards
import { AuthGuard } from 'src/app/auth-guards/auth.guard';

//Primeng Imports

const routes: Routes = [
  {path:'dash', component: PrivateComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    DashboardComponent,
    PrivateComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

})
export class PrivateModule { }
