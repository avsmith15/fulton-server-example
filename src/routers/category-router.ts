import { Category } from '../entities/category';
import { EntityRouter, entityRouter } from 'fulton-server';

@entityRouter("/categories", Category)
export class CategoryRouter extends EntityRouter<Category>{

}