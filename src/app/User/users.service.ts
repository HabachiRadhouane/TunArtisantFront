import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../Models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  usertUrl:string =  'http://127.0.0.1:8000/';

  selectedRole:Array<any> ;
  public allUsers : User[];
  //roles = ['ADMIN', 'ARTISAN','USER'];
  roles:any[]= [
    {code:'ADMIN',role:'ADMIN'},
    {code:'ARTISAN',role:'ARTISAN'},
    {code:'USER',role:'USER'},
  ];
  newUser: User = {
    id: null,
    email: '',
    username: '',
    roles : [''],
    password:''
  }
   
 

  getAllUsers1() {
  return  this.httpClient.get<User[]>(this.usertUrl+"api/users").subscribe( data => 
    { this.allUsers = data['hydra:member'];
    console.log(this.allUsers);
    });
     }

 

  
  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.usertUrl+"api/users"); 
  }

  deleteUser(id:Number){
    return this.httpClient.delete(this.usertUrl+"api/users/"+id)
  }
  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.usertUrl + "api/users/" + user.id, user);
  }
  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.usertUrl+"api/users", user);
  }
  choice(code){
    this.selectedRole=code;
  }
  // getUserByID(id){
  //   return this.getAllUsers.find(x => x.id === id);
  // }
}
