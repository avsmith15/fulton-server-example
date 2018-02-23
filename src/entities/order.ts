import { entity, objectIdColumn, column, idColumn, relatedTo } from "fulton-server";
import { Customer } from "./customer";
import { Employee } from './employee';
import { Shipper } from "./shipper";
import { OrderDetail } from './order-detail';

@entity("orders")
export class Order {
    @idColumn() // idColumn() is for the _id property, but the type isn't object id
    orderId: number;

    @relatedTo(Customer) // only store customer id
    customer: Customer;

    @relatedTo(Employee) // only store employee id
    employee: Employee;

    @column()
    orderDate: Date;

    @column()
    requiredDate: Date;

    @column()
    shippedDate: Date;

    @relatedTo(Shipper) 
    shipVia: Shipper;

    @column()
    freight: number;

    @column()
    shipName: string;

    @column()
    shipAddress: string;

    @column()
    shipCity: string;

    @column()
    shipRegion: string;

    @column()
    shipPostalCode: number;

    @column()
    shipCountry: string;

    @column(type => OrderDetail) // embedded documents
    details: OrderDetail[];
}