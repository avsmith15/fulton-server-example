import { entity, objectIdColumn, column, idColumn } from "fulton-server";

@entity("shippers")
export class Shipper {
    @idColumn() // idColumn() is for the _id property, but the type isn't object id
    id: number;

    @column()
    companyName: string;

    @column()
    phone: string;
}