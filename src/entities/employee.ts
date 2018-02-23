import { entity, objectIdColumn, column, relatedTo, idColumn } from "fulton-server";
import { Territory } from './territory';

@entity("employees")
export class Employee {
    @idColumn() // idColumn() is for the _id property, but the type isn't object id    
    employeeId: number;

    @column()
    lastName: string;

    @column()
    firstName: string;

    @column()
    title: string;

    @column()
    titleOfCourtesy: string;

    @column()
    birthDate: Date;

    @column()
    hireDate: Date;

    @column()
    address: string;

    @column()
    city: string;

    @column()
    region: string;

    @column()
    postalCode: number;

    @column()
    country: string;

    @column()
    homePhone: string;

    @column()
    extension: string;

    @column()
    photo: string;

    @column()
    notes: string;

    @column()
    reportsTo: number;

    @column()
    photoPath: string;

    // Mongo style relationship
    @relatedTo(Territory)
    territories: Territory[];
}