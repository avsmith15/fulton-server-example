import { entity, objectIdColumn, column, idColumn } from "fulton-server";

@entity("territories")
export class Territory {
    @idColumn() // the _id property, but the type isn't object id
    territoryId: number;

    @column()
    territoryDescription: string;

    @column()
    regionId: number;
}