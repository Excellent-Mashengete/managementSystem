import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

import { Employees } from 'src/app/interfaces/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient,private router: Router) { }
  

  getEmployees():Observable<any>{
    return this.http.get(`${this.baseUrl}emplist`)
  }

  getEmpByID(id: Number):Observable<any>{
    return this.http.get(`${this.baseUrl}empbyid`, )
  }

  deleteEmpByID(id : Employees) : Observable<any>{
    return this.http.delete(`${this.baseUrl}delete/${id.emp_id}`)
  }
  
  getOldEmp():Observable<any>{
    return this.http.get(`${this.baseUrl}oldemplist` )
  }

  moveEmpToOldEmp(oldemps:any, id: Employees,) : Observable<any>{
    return this.http.post(`${this.baseUrl}add_old_emp/${id.emp_id}`,oldemps)
  }

  addNewEmp(emps: any) : Observable<any>{
    return this.http.post(`${this.baseUrl}add_new`, emps)
  }

  updateEmpDetails(user:any, id:number): Observable<any>{
    return this.http.patch(`${this.baseUrl}updateEmp/${id}`, user)
  }
}
