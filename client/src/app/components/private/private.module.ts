import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PrivateComponent } from './private.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'', component: PrivateComponent}
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
  ]
})
export class PrivateModule { }
