import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Login/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }
  constructor(public LoginService: LoginService, private router:Router,) { }


  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {

      if (this.LoginService.isLoggedIn !== true) {
        window.alert("Access not allowed!");
        this.router.navigate(['/Login'])
      }
      return true;
    }
    }






