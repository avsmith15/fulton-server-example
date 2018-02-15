import { Employee } from '../entities/employee';
import { EntityRouter, entityRouter } from 'fulton-server';

@entityRouter("/employees", Employee)
export class EmployeeRouter extends EntityRouter<Employee>{

    list(req:any, res:any){
        super.list(req, res, null);
    }
}