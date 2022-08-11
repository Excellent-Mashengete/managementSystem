import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 
import { EmployeesService } from '../service/employees.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';

@Component({
  selector: 'app-oldemployees',
  templateUrl: './oldemployees.component.html',
  styleUrls: ['./oldemployees.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class OldemployeesComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;

  employeeList:any;
  term = '';
  constructor( private messageService: MessageService,  
    private confirmationService: ConfirmationService,
    private employees:EmployeesService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getOldEmps();
  }

  getOldEmps(){
    this.loading = true;
    this.employees.getOldEmp().subscribe({
      next:data => {
        this.loading = false;  
        this.employeeList = data
        
      }
    })
  }
}
