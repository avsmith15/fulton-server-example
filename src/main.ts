import { FultonAppLauncher } from 'fulton-server';
import { NorthWindApp } from './northwind-app';
import { ProductService } from './services/ProductService';

FultonAppLauncher
    .create(NorthWindApp)
    .task("sample_task", (app: NorthWindApp) => {
        // TODO: better example
        var service = app.container.get(ProductService);
        
        return service.productEs.find();
    })
    .launch()