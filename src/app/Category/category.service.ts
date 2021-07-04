import { Category } from './../Models/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  baseURL:string =  'http://127.0.0.1:8000/';
  public allCategories : Category[];

  getAllCategories() {
    return this.httpClient.get<Category[]>(this.baseURL+"api/categories").subscribe(
      (data: Category[]) => {
        this.allCategories = data['hydra:member'];
        console.table(this.allCategories);
      });
  }
}
