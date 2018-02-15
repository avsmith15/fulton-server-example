import { entity, objectIdColumn, column } from "fulton-server";

@entity("categories")
export class Category {
    @objectIdColumn({type: "number"}) // if the type isn't ObjectId, you needs give the type
    categoryId: number;

    @column()
    categoryName:string;

    @column()
    description:string;

    @column()
    picture:string;
}