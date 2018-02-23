import { FultonApp, FultonAppOptions } from "fulton-server"

import { Category } from './entities/category';
import { CategoryRouter } from "./routers/category-router";
import { Customer } from "./entities/customer";
import { CustomerRouter } from "./routers/customer-router";
import { Employee } from './entities/employee';
import { EmployeeRouter } from "./routers/employee-router";
import { Territory } from './entities/territory';
import { TerritoryRouter } from './routers/territory-router';
import { MeRouter } from './routers/me';
import { RegionRouter } from "./routers/region-router";
import { Region } from "./entities/regions";
import { Order } from "./entities/order";
import { Supplier } from './entities/supplier';
import { Shipper } from "./entities/shipper";
import { Product } from "./entities/product";
import { SupplierRouter } from './routers/supplier-router';

export class NorthWindApp extends FultonApp {
    protected onInit(options: FultonAppOptions): void {
        // enable swagger docs
        options.docs.enabled = true;

        // enable jsonapi
        options.formatter.jsonApi = true;

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
            MeRouter,
            RegionRouter,
            SupplierRouter,
            TerritoryRouter,
        ];

        // use loader to register service
        options.loader.serviceLoaderEnabled = true;

        // enable identity
        options.identity.enabled = true;

        // make the tokens live 10 years long
        options.identity.accessToken.duration = 315576000
    }
}