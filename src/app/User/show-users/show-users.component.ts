import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from 'src/app/Models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  userList: User[]=[] ;
  constructor(private usersService: UsersService, private router:Router) { }

  ngOnInit(): void  {
    this.usersService.getAllUsers().subscribe( data => 
      { this.userList = data['hydra:member'];
      console.log(this.userList);
  });

}
}

