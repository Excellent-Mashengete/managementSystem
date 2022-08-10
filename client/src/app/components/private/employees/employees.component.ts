import { Component, OnInit } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 
import { EmployeesService } from '../service/employees.service';
import { Employees } from 'src/app/interfaces/employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class EmployeesComponent implements OnInit {
  emp: any 
  totalNumber: number = 0
  constructor(
    private messageService: MessageService,  
    private confirmationService: ConfirmationService,
    private employees:EmployeesService) { }

  ngOnInit(): void {
   
    this.getEmp()
  }
  getEmp(){
    return this.employees.getEmployees().subscribe({
      next:data =>{
       this.emp = data
       this.getTotal(data.length)
      }
    })
  }
  getTotal(tot:number){
    return this.totalNumber = tot;
  }

  deleteProduct(details:Employees){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + details.first_name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.employees.moveEmpToOldEmp(details, details.emp_id).subscribe({
          next:data =>{
            console.log(data)
            // this.employees.deleteEmpByID(details).subscribe();
          }
        })
        this.getEmp();
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Book Deleted', life: 3000})
      },
      reject: () => {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'You have rejected', life: 3000})
      }
    })
  }
}
