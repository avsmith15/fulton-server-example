import { Territory } from '../entities/territory';
import { EntityRouter, entityRouter } from 'fulton-server';

@entityRouter("/territories", Territory)
export class TerritoryRouter extends EntityRouter<Territory>{
}