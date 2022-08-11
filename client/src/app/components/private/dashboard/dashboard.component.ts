import { Component, OnInit } from '@angular/core';
import { DepartmentNamesService } from '../service/department-names.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dash:DepartmentNamesService
  ) { }
  
  admin:any;
  finace:any;
  hr:any;
  it:any;
  market:any;

  ngOnInit(): void {
    this.getAdmin();
    this.getFinance();
    this.getHr();
    this.getITDept();
    this.getMarket();
  }

  getAdmin(){
    return this.dash.getAdministrationDept(1).subscribe({
      next:data =>{
        this.admin = data
        console.log(this.admin)
      }    
    })
  }

  getFinance(){
    return this.dash.getFinanceDept(3).subscribe({
      next:data =>{
        this.finace = data
        console.log(this.finace)
      }
    })
  }

  getMarket(){
    return this.dash.getMakertingDept(2).subscribe({
      next:data =>{
        this.market = data
        console.log(this.market)
      }
    })
  }

  getHr(){
    return this.dash.getHumanResourceDept(5).subscribe({
      next:data =>{
        this.hr = data
        console.log(this.hr)
      }
    })
  }

  getITDept(){
    return this.dash.getITDepartmentDept(4).subscribe({
      next:data =>{
        this.it = data
        console.log(this.it)
      }
    })
  }
}
