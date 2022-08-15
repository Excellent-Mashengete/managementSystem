import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from '../service/employees.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';

@Component({
  selector: 'app-oldemployees',
  templateUrl: './oldemployees.component.html',
  styleUrls: ['./oldemployees.component.scss'],
})
export class OldemployeesComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;

  employeeList:any;
  term = '';
  constructor(private employees:EmployeesService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getOldEmps();
  }

  getOldEmps(){
    
    this.employees.getOldEmp().subscribe({
      next:data => {
        this.loading = true;
        this.employeeList = data
        this.loading = false;
      }
    })
  }
}
