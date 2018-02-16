import { Employee } from '../entities/employee';
import { EntityRouter, entityRouter, authorized } from 'fulton-server';

// needs logged in use to visit /employees 
@entityRouter("/employees", Employee, authorized())
export class EmployeeRouter extends EntityRouter<Employee>{
}