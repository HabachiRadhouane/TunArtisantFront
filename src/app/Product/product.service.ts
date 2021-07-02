import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  baseURL:string =  'http://127.0.0.1:8000/';
  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseURL+"api/products");
  }
}
