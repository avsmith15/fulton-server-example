import { Service, EntityServiceFactory, IEntityService, OperationResult, Helper } from 'fulton-server';
import { Product } from '../entities/product';
import { Supplier } from '../entities/supplier';

export class ProductService extends Service {
    supplierEs: IEntityService<Supplier>;
    productEs: IEntityService<Product>;

    constructor(factory: EntityServiceFactory) {
        super();
        this.supplierEs = factory(Supplier)
        this.productEs = factory(Product)
    }

    async findBySupplierName(supplierName: string): Promise<OperationResult<Product>> {
        let findOneResult = await this.supplierEs.findOne({
            filter: { companyName: { $regex: Helper.escapedRegexp(supplierName) } }
        })

        console.log(Helper.escapedRegexp(supplierName));

        if (findOneResult.data == null) {
            return {
                errors: findOneResult.errors || { message: "invalid supplier name" }
            }
        }

        return this.productEs.find({
            filter: { supplier: { id: findOneResult.data.id } }
        });
    }
}