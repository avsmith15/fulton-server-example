import { entity, objectIdColumn, column, idColumn } from "fulton-server";

@entity("customers")
export class Customer {
    @idColumn() // idColumn() is for the _id property, but the type isn't object id
    customerId: string;

    @column()
    companyName:string;

    @column()
    contactName:string;

    @column()
    contactTitle:string;

    @column()
    address:string;

    @column()
    city:string;

    @column()
    region:string;

    @column()
    postalCode:number;

    @column()
    country:string;

    @column()
    phone:string;

    @column()
    fax:string;
}