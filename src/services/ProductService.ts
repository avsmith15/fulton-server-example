import { Service, EntityServiceFactory, IEntityService, Helper, inject, DiKeys, OperationManyResult } from 'fulton-server';
import { Product } from '../entities/product';
import { Supplier } from '../entities/supplier';

export class ProductService extends Service {
    supplierEs: IEntityService<Supplier>;
    productEs: IEntityService<Product>;

    constructor(@inject(DiKeys.EntityServiceFactory) factory: EntityServiceFactory) {
        super();
        this.supplierEs = factory(Supplier)
        this.productEs = factory(Product)
    }

    async findBySupplierName(supplierName: string): Promise<OperationManyResult<Product>> {
        let findOneResult = await this.supplierEs.findOne({
            filter: { companyName: { $regex: Helper.escapedRegexp(supplierName, "i") } }
        })

        if (findOneResult.data == null) {
            return {
                error: findOneResult.error || { message: "invalid supplier name" }
            }
        }

        return this.productEs.find({
            filter: { supplier: { id: findOneResult.data.id } }
        });
    }
}