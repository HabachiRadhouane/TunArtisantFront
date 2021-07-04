import { Category } from './../Models/category.model';
import { Product } from './../Models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public allProducts : Product[];
  constructor(private httpClient: HttpClient) { }
  baseURL:string =  'http://127.0.0.1:8000/';

  newProduct: Product = {
    id: null,
    title: '',
    description: '',
    price: 0,
    quantity: 0,
    category: new Category,
    commands : []
  }

  // getAllProducts(): Observable<Product[]>{
  //   return this.httpClient.get<Product[]>(this.baseURL+"api/products");
  // }

  getAllProducts() {
    return this.httpClient.get<Product[]>(this.baseURL+"api/products").subscribe(
      (data: Product[]) => {
        this.allProducts = data['hydra:member'];
        console.table(this.allProducts);
      });
  }

  deleteProduct(id:Number){
    return this.httpClient.delete(this.baseURL+"api/products/"+id)
  }
  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.baseURL + "api/products/" + product.id, product);
  }
  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseURL+"api/products", product);
  }
  getProductByID(id){
    return this.allProducts.find(x => x.id === id);
  }
}
