import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './../Models/login.model';
import { RouteConfigLoadEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  usertUrl:string =  'http://127.0.0.1:8000/';
  newLogin: Login = {
    email: '',
    password:''
  }
  roleAs;
  public login : Login[];
 

  LoginUsers(login: Login):  Observable<Login> {
    return this.httpClient.post<Login>(this.usertUrl + 'api/login_check', login, { responseType: 'json' });

  }


  getUserByEmail(email: string) {
    return this.httpClient.get(this.usertUrl + 'user/getUserByEmail/' + email);
  }

  logout() {
    localStorage.removeItem('roles');
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('jwt');
    return (authToken !== null) ? true : false;
  }

  getRole() {
    this.roleAs = localStorage.getItem('roles');
    return this.roleAs;
  }
  
}
