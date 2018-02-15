import { Customer } from '../entities/customer';
import { EntityRouter, entityRouter } from 'fulton-server';

// if path is regex, it is case sensitive, you can make it supports /customer or /customers 
@entityRouter(/\/customers?/i, Customer)
export class CustomerRouter extends EntityRouter<Customer>{

}