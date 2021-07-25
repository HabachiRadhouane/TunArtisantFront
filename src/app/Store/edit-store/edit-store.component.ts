import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreService } from '../store.service';
import { Store } from 'src/app/Models/store.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../User/users.service';

import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {
  storeList: Store[]=[] ;
  constructor(public storeService: StoreService, public userService: UsersService , private router:Router,private activatedRoute:ActivatedRoute, private httpClient: HttpClient) { }
  editClickedFromEdit : any ;
  editable: boolean = true;  
  allUsers : User[];
  store : Store = new Store();
  id;
  logo:any;
  ngOnInit(): void {
  this.getAllUsers();
  this.id = this.activatedRoute.snapshot.params.id
  console.log(this.id)
  this.getStoreById(this.id)
  this.userService.getAllUsers1();
  }

  updateStore(id:number,store: Store) {
    console.log(store);
    this.storeService.updateStore(store).subscribe(
    );
  }
  editStore(store:Store){
    console.log(store);
    store.logo=this.logo; 
    this.storeService.updateStore(store).subscribe();
    this.editClickedFromEdit=Math.random();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        this.allUsers = data['hydra:member'];
        console.table(this.allUsers);
      });
  }
  
  getStoreById(id){
    return this.httpClient.get<Store>(this.storeService.usertUrl+"api/stores/"+id).subscribe(
      (data)=> {
        // console.log(data);
        this.store = data ;
      }
    );
  }


  selectFile(event) {
    let loadedImage = event.currentTarget;
    this.logo = event.target.files[0].name;
  }

}
