import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user.model';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/Login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userList: User[]=[] ;
  newUser : User = new User();
  confirmed;
  currentUser 
  Role

  constructor(public UserService: UsersService ,private httpClient: HttpClient, public LoginService: LoginService) { }
  usertUrl:string =  'http://127.0.0.1:8000/';

  ngOnInit(): void {
    this.getAllUsers();
    this.currentUser= JSON.parse(localStorage.getItem('user'));
    console.log(this.currentUser.email); 
  
    this.Role= localStorage.getItem('roles');
    console.log(this.Role);  
  }

  getAllUsers() {
  this.UserService.getAllUsers().subscribe( data => 
    { this.userList = data['hydra:member'];
    console.log(this.userList);
});
  }

  deleteUser(id: number) {
    this.UserService.deleteUser(id).subscribe(
      (data) => {
        this.getAllUsers();
      });
  }

  /*editUser(user: User) {
    this.UserService.newUser= Object.assign({}, user);
  }*/

  updateUser(id:number,user: User) {
    console.log(user);
    this.UserService.updateUser(user).subscribe(
    );
  }

  editUser(res: User) {
    this.UserService.newUser= Object.assign({}, res);
  }

  acceptUser(id:number,user:User){
    console.log(id);
    user.status = "Confirmed" ;
    console.log(user);
    this.UserService.updateUser(user).subscribe();
}


logout(){

  this.LoginService.logout();
}

}
