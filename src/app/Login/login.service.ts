import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './../Models/login.model';

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
  public login : Login[];

  getAllLogin(email,password): Observable<Login[]>{
    return this.httpClient.get<Login[]>(this.usertUrl+"login"); 
  }

  
}
