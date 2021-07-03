import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';
import { Store } from 'src/app/Models/store.model';
@Component({
  selector: 'app-add-stores',
  templateUrl: './add-stores.component.html',
  styleUrls: ['./add-stores.component.css']
})
export class AddStoresComponent implements OnInit {

  constructor(public storeService: StoreService, private router:Router) { }

  ngOnInit(): void {
  }

  addStore(store: Store) {
    console.log(store);
    this.storeService.addStore(store).subscribe();
  }


}
