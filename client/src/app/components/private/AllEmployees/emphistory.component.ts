import { Component, OnInit, ViewChild } from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-emphistory',
  templateUrl: './emphistory.component.html',
  styleUrls: ['./emphistory.component.scss']
})
export class EmphistoryComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;

  constructor( private employees:EmployeesService) { }

  term = '';
  current: any = [] //create an array 
  old:any = [];  //create an array 
  empList: Array<any> = []; //Create a array list of type any, why Size of the ArrayList is not fixed. ArrayList can grow and shrink dynamically.
  status: String = ''

  ngOnInit(): void {
    this.currentEmployees();
    this.pastEmployees();    
  }

  currentEmployees(){
    return this.employees.getEmployees().subscribe({
      next:data =>{
        this.current = data;
        this.current.forEach((element:any) => {
          this.empList.push(element)
        });  
      }
    })
  }

  pastEmployees(){
    return this.employees.getOldEmp().subscribe({
      next:data =>{
        this.old = data;
        this.old.forEach((element:any) => {
          this.empList.push(element)
        });
      }
    })
  }
  
}
