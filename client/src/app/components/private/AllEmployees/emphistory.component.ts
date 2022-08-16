import { Component, OnInit, ViewChild } from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';
import { EmployeesService } from '../service/employees.service';
import { PrimeNGConfig } from 'primeng/api';

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
  p:number = 1;
  total:number = 0;
  ngOnInit(): void {
    this.loading = true;
    this.currentEmployees();
    this.pastEmployees();  
  }

  currentEmployees(){
    return this.employees.getEmployees().subscribe({
      next:data =>{
        this.loading = true;
        this.current = data;
        this.current.forEach((element:any) => {
          this.loading = true;
          this.empList.push(element)
          this.loading = false;
        });  
        this.loading = false;
        
      }
    })
  }

  pastEmployees(){
    return this.employees.getOldEmp().subscribe({
      next:data =>{
        this.loading = true;

        this.old = data;
        this.loading = false;
        this.old.forEach((element:any) => {
          this.empList.push(element)
        });
    
      }
    })
  }

}
