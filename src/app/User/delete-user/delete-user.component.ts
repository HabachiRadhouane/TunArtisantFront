import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from 'src/app/Models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userList: User[]=[] ;

  constructor(public UserService: UsersService ) { }

  ngOnInit(): void {
    this.getAllUsers();
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

  

}
