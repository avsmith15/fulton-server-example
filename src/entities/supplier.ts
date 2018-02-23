import { entity, objectIdColumn, column, idColumn, relatedTo } from "fulton-server";
import { Category } from './category';

@entity("suppliers")
export class Supplier {
    @idColumn() // idColumn() is for the _id property, but the type isn't object id
    id: number;

    @column()
    companyName: string;

    @column()
    contactName: string;

    @column()
    contactTitle: string;

    @column()
    address: string;

    @column()
    city: string;
    
    @column()
    region: string;
    
    @column()
    postalCode: number;

    @column()
    country: string;

    @column()
    phone: string;

    @column()
    fax: string;

    @column()
    homePage: string;
}