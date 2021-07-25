import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscriptionevent } from './../Models/inscriptionevent.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptioneventService {

  constructor(private httpClient: HttpClient) {}
  inscriptioneventUrl:string =  'http://127.0.0.1:8000/api/inscriptions';

  newinscriptionevent: Inscriptionevent = {
    
    id: null,
    user: '',
    event: '',
    state: '',
    createdAt: '',
    updatedAt: ''

  }

  getAllInscriptionevents(): Observable<Inscriptionevent[]>{
    return this.httpClient.get<Inscriptionevent[]>(this.inscriptioneventUrl); 
  }
  addInscriptionevent(inscriptionevent: Inscriptionevent): Observable<Inscriptionevent> {
    return this.httpClient.post<Inscriptionevent>(this.inscriptioneventUrl, inscriptionevent);
  }
  deleteInscriptionevent(id:Number){
    return this.httpClient.delete(this.inscriptioneventUrl+'/'+id)
  }
  updateInscriptionevent(inscriptionevent: Inscriptionevent): Observable<Inscriptionevent> {
    return this.httpClient.put<Inscriptionevent>(this.inscriptioneventUrl+'/'+inscriptionevent.id, inscriptionevent);
  }
  getByInscriptioneventId(id){
    return this.httpClient.get<Inscriptionevent>(this.inscriptioneventUrl+"/"+id);
  }
}
