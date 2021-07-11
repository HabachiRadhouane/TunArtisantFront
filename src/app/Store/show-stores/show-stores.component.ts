import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { StoreService } from '../store.service';
import { Store } from 'src/app/Models/store.model';
import { Router } from '@angular/router';
import { User } from './../../Models/user.model';

@Component({
  selector: 'app-show-stores',
  templateUrl: './show-stores.component.html',
  styleUrls: ['./show-stores.component.css']
})
export class ShowStoresComponent implements OnInit {
  storeList: Store[]=[] ;

  constructor(public storeService: StoreService, private router:Router) { }
  @Input() editClickedInput : any
  currentUser = new User();
  user : User

  ngOnInit(): void {
    this.getAllStores();
    this.currentUser.id = 11;
    this.currentUser.email="priest123@hotmail.fr"
    this.currentUser.username="ArgubiAmel@gmail.com"
    this.currentUser.password="aaaa"
    this.currentUser.status = "ADMIN"

    sessionStorage.setItem('userDetails', JSON.stringify(this.currentUser));
    
  }


  getAllStores(){

    this.storeService.getAllStores().subscribe( data => 
      { this.storeList = data['hydra:member'];
      console.log(this.storeList);
  });
  }

  deleteStore(id: number) {
    this.storeService.deleteStore(id).subscribe(
      (data) => {
        this.getAllStores();
      });
  }

   
  editStore(res: Store) {
    this.storeService.newStore= Object.assign({}, res);
  }

  editStore1(store: Store) {
    this.storeService.newStore = Object.assign({}, store);
    this.storeService.newStore.userAccount= store.userAccount['@id'] ;
  }
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    if(changes['editClickedInput'].firstChange||changes['editClickedInput'].previousValue!=changes['editClickedInput'].currentValue){
      this.getAllStores();
    }
  }
}
