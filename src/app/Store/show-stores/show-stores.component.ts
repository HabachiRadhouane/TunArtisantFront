import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Store } from 'src/app/Models/store.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-stores',
  templateUrl: './show-stores.component.html',
  styleUrls: ['./show-stores.component.css']
})
export class ShowStoresComponent implements OnInit {
  storeList: Store[]=[] ;

  constructor(public storeService: StoreService, private router:Router) { }

  ngOnInit(): void {
    this.getAllStores();
    
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
}
