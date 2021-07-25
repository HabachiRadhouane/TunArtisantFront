import { Category } from "./category.model";
import { Store } from "./store.model";

export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    commands:[] ;
    store:string;
}
