import { EntityRouter, entityRouter, httpGet, Request, Response } from 'fulton-server';
import { Supplier } from '../entities/supplier';
import { ProductService } from '../services/ProductService';

/**
 * In this example, show you how to use another service and custom a router action in EntityRouter
 */
@entityRouter("/suppliers", Supplier)
export class SupplierRouter extends EntityRouter<Supplier>{
    constructor(private productService: ProductService) {
        super();
    }


    @httpGet("/:name/products")
    productList(req: Request, res: Response) {
        return this.productService
            .findBySupplierName(req.params.name)
            .then((result) => {
                res.send(result);
            });
    }
}