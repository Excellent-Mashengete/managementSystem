import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentNamesService } from '../service/department-names.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;

  constructor(
    private dash:DepartmentNamesService
  ) { }
  
  admin:any;
  finace:any;
  hr:any;
  it:any;
  market:any;

  ngOnInit(): void {
    this.loading = true;
    this.getAdmin();
    this.getFinance();
    this.getHr();
    this.getITDept();
    this.getMarket();
  }

  getAdmin(){
    return this.dash.getAdministrationDept(1).subscribe({
      next:data =>{
        this.loading = true;
        this.admin = data
        this.loading = false;
      }    
    })
  }

  getFinance(){
    return this.dash.getFinanceDept(3).subscribe({
      next:data =>{
        this.loading = true;
        this.finace = data
        this.loading = false;
      }
    })
  }

  getMarket(){
    return this.dash.getMakertingDept(2).subscribe({
      next:data =>{
        this.loading = true;
        this.market = data
        this.loading = false;
      }
    })
  }

  getHr(){
    return this.dash.getHumanResourceDept(5).subscribe({
      next:data =>{
        this.loading = true;
        this.hr = data
        this.loading = false;
      }
    })
  }

  getITDept(){
    return this.dash.getITDepartmentDept(4).subscribe({
      next:data =>{
        this.loading = true;
        this.it = data
        this.loading = false;
      }
    })
  }
}
