import { Component, OnInit, ViewChild} from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api'; 
import { EmployeesService } from '../service/employees.service';
import { Employees } from 'src/app/interfaces/employees';
import { Update } from 'src/app/models/update.models';
import { Router } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class EmployeesComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;

  emp: any 
  empList: Update = new Update;
  totalNumber: number = 0
  productDialog: boolean = false;
  submitted = false;
  term = '';
  constructor(
    private messageService: MessageService,  
    private confirmationService: ConfirmationService,
    private employees:EmployeesService,
    private route:Router) { }
  
  //Prevent numbers from being entered on where string is only allowed e.g first_name and last_name
  keyPressAlphanumeric(event: { keyCode: number; preventDefault: () => void; }) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  ngOnInit(): void {
    this.loading = true;
    this.getEmp()
  }

  //get all employees on the database
  getEmp(){
    return this.employees.getEmployees().subscribe({
      next:data =>{
        this.loading = true;
       this.emp = data
       this.loading = false;
       this.getTotal(data.length)
      }
    })
  }

  //Get total current employee 
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
          dept_id:details.dept_id,
          status: 'Former'
        }
        this.loading = true;
        this.employees.moveEmpToOldEmp(user, details).subscribe();
        this.employees.deleteEmpByID(details).subscribe({
           next:data =>{
             this.route.navigate(['/dash/employees']);
           }
        });
        
        this.getEmp();
        this.loading = false;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Employee Deleted', life: 3000})
      },
      reject: () => {
        this.loading = false;
        this.messageService.add({severity:'error', summary: 'Error', detail: 'You have rejected', life: 3000})
      }
    })
  }

  //Keeps the modal hidden at all times
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  //Open a modal
  openNew(){
    //pass the datatypes in the modal class to modal
    this.empList = {}
    this.submitted = false;
    this.productDialog = true;

    //Reset form every time you insert data

  }

  //Edit data from modal
  editProduct(empList: Update) {
    this.empList = {...empList};
    //Open the modal
    this.productDialog = true;
  }

  saveEmployee(){
    this.submitted = true;
    if (this.empList.emp_id){
      //pass data that needs to be updated as an object to user variable
      let user = {
          phone_number: this.empList.phone_number,
          salary: this.empList.salary,
          dept_id: this.empList.dept_id   
      }
      //Subscribe to a service that uses a patch to update infor

      this.employees.updateEmpDetails(user, this.empList.emp_id).subscribe({
        next:data =>{
          this.loading = true;
          //Route back to employees this helps in refreshing data
          this.route.navigate(['/dash/employees']);

          //Close dialog modal
          
          this.productDialog = false;
          //Display a message if successful
          this.loading = false;
          this.messageService.add({severity:'success', summary: 'Success', detail:  'Employee Updated successfully', life: 3000});
        },error: err => {
          this.loading = false;
          //display an error message coming from backend if it failed to update
          this.messageService.add({severity:'error', summary: 'Error', detail:  err.error.message, life: 3000});
        }
      });
    }else{
      //pass data that needs to be data will be inserted in a the database as an object to newEmployees variable
      let newEmployees = { 
        first_name: this.empList.first_name,
        last_name: this.empList.last_name,
        email: this.transform(this.empList.first_name) +"."+ this.transform(this.empList.last_name) +"@zoho.com",
        phone_number: this.empList.phone_number,
        salary: this.empList.salary,
        dept_id:this.empList.dept_id,
        status:'Former'
      }

      this.employees.addNewEmp(newEmployees).subscribe({
        next:data =>{
          this.loading = true;
          this.route.navigate(['/dash/employees']);
          this.productDialog = false;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Employee Added', life: 3000})
          this.getEmp() 
          this.loading = false;
        },
        error: err => {
          this.loading = false;
          this.messageService.add({severity:'error', summary: 'Error', detail: err.error.message, life: 3000}) 
        }
      }) 
    }
  }

  transform(value:any): string {
    let first = value.toLowerCase();
    return first; 
  }
}
