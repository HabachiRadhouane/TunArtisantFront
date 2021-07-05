import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Store } from 'src/app/Models/store.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {
  storeList: Store[]=[] ;
  constructor(public storeService: StoreService, private router:Router) { }

  ngOnInit(): void {
  }

  updateStore(id:number,store: Store) {
    console.log(store);
    this.storeService.updateStore(store).subscribe(
    );
  }

}
