import { entity, objectIdColumn, column, idColumn, relatedTo } from "fulton-server";
import { Product } from "./product";

export class OrderDetail {
    @relatedTo(Product)
    product: Product;

    @column()
    unitPrice: number;

    @column()
    quantity: number;

    @column()
    discount: number;
}