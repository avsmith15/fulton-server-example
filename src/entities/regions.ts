import { entity, objectIdColumn, column, idColumn } from "fulton-server";

@entity("regions")
export class Region {
    @idColumn() // idColumn() is for the _id property, but the type isn't object id    
    id: number;

    @column()
    regionDescription: string;
}