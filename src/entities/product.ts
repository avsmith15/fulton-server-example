import { entity, objectIdColumn, column, idColumn, relatedTo } from "fulton-server";
import { Category } from './category';
import { Supplier } from "./supplier";

@entity("products")
export class Product {
    @idColumn() // idColumn() is for the _id property, but the type isn't object id
    id: number;

    @column()
    productName: string;

    @relatedTo(Supplier)
    supplier: Supplier;

    @relatedTo(Category)
    category: Category;

    @column()
    quantityPerUnit: number;

    @column()
    unitPrice: number;

    @column()
    unitsInStock: number;

    @column()
    unitsOnOrder: number;
    
    @column()
    reorderLevel: number;
    
    @column()
    discontinued: number;
}