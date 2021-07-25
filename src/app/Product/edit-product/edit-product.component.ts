import { HttpClient } from '@angular/common/http';
import { Category } from './../../Models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../../Category/category.service';
import { ProductService } from './../product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(public productService: ProductService, public categoryService: CategoryService , private router:Router,private activatedRoute:ActivatedRoute, private httpClient: HttpClient) { }
  editClickedFromEdit : any ;
  allCategories : Category[];
  product : Product = new Product();
  id;
  ngOnInit(): void {
    this.getAllCategories();
    this.id = this.activatedRoute.snapshot.params.id
    console.log(this.id)
    this.getProductById(this.id)
  }

  editProduct(product:Product){
    console.log(product);
    this.productService.updateProduct(product).subscribe();
    this.editClickedFromEdit=Math.random();
  }
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      (data: Category[]) => {
        this.allCategories = data['hydra:member'];
        console.table(this.allCategories);
      });
  }
  getProductById(id){
    return this.httpClient.get<Product>(this.productService.baseURL+"api/products/"+id).subscribe(
      (data)=> {
        this.product = data ;
        this.product.category=data['category']['@id'];
        this.product.store=data['store']['@id'];
        console.log(this.product);
      }
    );
  }

}
