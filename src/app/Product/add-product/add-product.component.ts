import { CategoryService } from './../../Category/category.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from '../product.service';
import { Category } from 'src/app/Models/category.model';
import { Store } from 'src/app/Models/store.model';
import { StoreService } from 'src/app/Store/store.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(
    public productService: ProductService,
    public categoryService: CategoryService ,
    public storeService: StoreService ,
    private router:Router) { }
  allCategories : Category[];
  allStores : Store[];

  newProduct: Product = {
    id: null,
    title: '',
    description: '',
    price: 0,
    quantity: 0,
    category: '',
    commands : [],
    store: ''
  }
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllStores();
  }
  addProduct(product: Product) {
    this.productService.addProduct(product).subscribe();
    console.log(product)
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      (data: Category[]) => {
        this.allCategories = data['hydra:member'];
        console.table(this.allCategories);
      });
  }
  getAllStores(){
    this.storeService.getAllStores().subscribe(
      (data: Store[]) => {
        this.allStores = data['hydra:member'];
        console.table(this.allStores);
      });
  }

}
