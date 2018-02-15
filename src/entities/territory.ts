import { entity, objectIdColumn, column } from "fulton-server";

@entity("territories")
export class Territory {
    @objectIdColumn({ type: "number" }) // if the type isn't ObjectId, you needs give the type
    territoryId: number;

    @column()
    territoryDescription: string;

    @column()
    regionId: number;
}