//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Model for search and pagination
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxPaginationModule } from 'ngx-pagination';

//Components
import { PrivateComponent } from './private.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesComponent } from './employees/employees.component';
import { OldemployeesComponent } from './oldemployees/oldemployees.component';
import { EmphistoryComponent } from './AllEmployees/emphistory.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Guards
import { AuthGuard } from 'src/app/auth-guards/auth.guard';


//Primeng Imports
//primeNG 
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule, } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';



const routes: Routes = [
  {path:'dash', component: PrivateComponent, canActivate: [AuthGuard],
  children:[
    {path:'employees', component: EmployeesComponent},
    {path:'home', component: DashboardComponent},
    {path:'oldemployees', component: OldemployeesComponent},
    {path: 'allemployees', component:EmphistoryComponent},
    {path:'', redirectTo:'/dash/home', pathMatch:'full'},

  ]},
]


@NgModule({
  declarations: [
    PrivateComponent,
    FooterComponent,
    EmployeesComponent,
    OldemployeesComponent,
    EmphistoryComponent,
    DashboardComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    NgxPaginationModule,

     //loader
     NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
      fullScreenBackdrop: false,
    }),
    
    FormsModule,
    InputMaskModule,
    ReactiveFormsModule,
    InputNumberModule,
    CommonModule,
    TableModule,
    CardModule,
    ToastModule,
    PaginatorModule,
		DialogModule,
		DropdownModule,
		ButtonModule,
    ProgressBarModule,
    InputTextModule,
    ConfirmDialogModule,
    MessagesModule,

    RouterModule.forChild(routes)
  ],
  providers: [ MessageService, ConfirmationService],

})
export class PrivateModule { }
