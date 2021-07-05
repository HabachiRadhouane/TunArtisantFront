import { Category } from "./category.model";

export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
    category: Category;
    commands:[] ;
}
