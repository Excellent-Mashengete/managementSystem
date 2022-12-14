import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../components/auth/service/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class LoggedGuard implements CanActivate {
  constructor(
    public authService: AuthenticationService,
    public router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      //if user is logged in (true) prevent them from routing back to login and register
      if (this.authService.isLoggedIn == true) {
        this.router.navigate(['/dash'])
      }
      return true;
  }
  
}
