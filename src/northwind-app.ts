import { FultonApp, FultonAppOptions } from "fulton-server"

import { Category } from './entities/category';
import { CategoryRouter } from "./routers/category-router";
import { Customer } from "./entities/customer";
import { CustomerRouter } from "./routers/customer-router";
import { Employee } from './entities/employee';
import { EmployeeRouter } from "./routers/employee-router";
import { Territory } from './entities/territory';
import { TerritoryRouter } from './routers/territory-router';
import { RegionRouter } from "./routers/region-router";
import { Region } from "./entities/regions";
import { Order } from "./entities/order";
import { Supplier } from './entities/supplier';
import { Shipper } from "./entities/shipper";
import { Product } from "./entities/product";
import { SupplierRouter } from './routers/supplier-router';

export class NorthWindApp extends FultonApp {
    protected onInit(options: FultonAppOptions): void {
        // some options are defined in .env files

        // register entities
        options.entities = [
            Category,
            Customer,
            Employee,
            Order,
            Product,
            Region,
            Shipper,
            Supplier,
            Territory
        ];

        // register routers
        options.routers = [
            CategoryRouter,
            CustomerRouter,
            EmployeeRouter,
            RegionRouter,
            SupplierRouter,
            TerritoryRouter,
        ];

        // make the tokens live 10 years long
        options.identity.accessToken.duration = 315576000;
    }
}