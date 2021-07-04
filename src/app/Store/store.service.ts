import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from './../Models/store.model';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  usertUrl:string =  'http://127.0.0.1:8000/';
  newStore: Store = {
    id: null,
    titre: '',
    description:'',
    logo: '',
    adresse: '',
    professionalEmail: '',
    userAccount: new User
  }

  getAllStores(): Observable<Store[]>{
    return this.httpClient.get<Store[]>(this.usertUrl+"api/stores"); 
  }

  deleteStore(id:Number){
    return this.httpClient.delete(this.usertUrl+"api/stores/"+id)
  }
  updateStore(store: Store): Observable<Store> {
    return this.httpClient.put<Store>(this.usertUrl + "api/stores/" + store.id, store);
  }
  addStore(store: Store): Observable<Store> {
    return this.httpClient.post<Store>(this.usertUrl+"api/stores", store);
  }

}
