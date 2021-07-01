import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  usertUrl:string =  'http://127.0.0.1:8000/api/users';
  getAllUsers(): Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.usertUrl); 
  }
}
