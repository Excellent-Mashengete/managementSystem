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
        let user ={
          first_name :details.first_name,
          last_name :details.last_name,
          email: details.email,
          phone_number:details.phone_number,
          hiredate:details.hiredate,
          salary:details.salary,
          dept_id:details.dept_id
        }
        console.log(user)
        this.employees.moveEmpToOldEmp(user, details).subscribe();
        this.employees.deleteEmpByID(details).subscribe();
        this.getEmp();
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Employee Deleted', life: 3000})
      },
      reject: () => {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'You have rejected', life: 3000})
      }
    })
  }

  openNew(){

  }
}
