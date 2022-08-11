import { Component, OnInit } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 
import { EmployeesService } from '../service/employees.service';
import { Employees } from 'src/app/interfaces/employees';

@Component({
  selector: 'app-oldemployees',
  templateUrl: './oldemployees.component.html',
  styleUrls: ['./oldemployees.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class OldemployeesComponent implements OnInit {
  employeeList:any;

  constructor( private messageService: MessageService,  
    private confirmationService: ConfirmationService,
    private employees:EmployeesService) { }

  ngOnInit(): void {
    this.getOldEmps();
  }

  getOldEmps(){
    this.employees.getOldEmp().subscribe({
      next:data => {
        this.employeeList = data
        console.log(data)
      }
    })
  }
}
