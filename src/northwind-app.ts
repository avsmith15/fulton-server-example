import { FultonApp, FultonAppOptions } from "fulton-server"

import { Category } from './entities/category';
import { CategoryRouter } from "./routers/category-router";
import { Customer } from "./entities/customer";
import { CustomerRouter } from "./routers/customer-router";
import { Employee } from './entities/employee';
import { EmployeeRouter } from "./routers/employee-router";
import { Territory } from './entities/territory';
import { TerritoryRouter } from './routers/territory-router';

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
            Territory
        ];

        // register routers
        options.routers = [
            CategoryRouter,
            CustomerRouter,
            EmployeeRouter,
            TerritoryRouter
        ];

        // use loader to register service
        options.loader.serviceLoaderEnabled = true;
    }
}