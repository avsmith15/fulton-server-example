import { NorthWindApp } from './northwind-app';

let app = new NorthWindApp();
app.start().catch(() => {
    process.exit(1);
})