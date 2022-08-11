import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentNamesService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient,private router: Router) { }
  
  getMakertingDept(id: Number):Observable<any>{
    return this.http.get(`${this.baseUrl}deptname/${id}`)
  }

  getITDepartmentDept(id: Number):Observable<any>{
    return this.http.get(`${this.baseUrl}deptname/${id}`, )
  }

  getFinanceDept(id: Number):Observable<any>{
    return this.http.get(`${this.baseUrl}deptname/${id}`, )
  }

  getAdministrationDept(id: Number):Observable<any>{
    return this.http.get(`${this.baseUrl}deptname/${id}`, )
  }
  

  getHumanResourceDept(id: Number):Observable<any>{
    return this.http.get(`${this.baseUrl}deptname/${id}`, )
  } 
}
