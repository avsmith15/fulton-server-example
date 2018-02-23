import { EntityService, EntityServiceFactory, IEntityService, Request, Response, Router, Type, entityRouter, httpGet, router, DiKeys } from 'fulton-server';

import { Region } from '../entities/regions';
import { Territory } from '../entities/territory';

/**
 * This RegionRouter uses register Router. Also, it uses EntityServiceFactory to get the a EntityService for Region.
 * It has two router actions, fetch and fetchById to get data from EntityService
 * 
 * It is as an example of How to use Router + EntityService
 */
@router("/metadata/regions")
export class RegionRouter extends Router {
    entityService: IEntityService<Region>;

    onInit() {
        // get the entity service factory from container
        let factory = this.app.container.get<EntityServiceFactory<Region>>(DiKeys.EntityServiceFactory);

        this.entityService = factory(Region);
    }

    @httpGet("/")
    fetch(req: Request, res: Response) {
        this.entityService
            .find(req.queryParams)
            .then((result) => {
                res.send(result);
            });
    }

    @httpGet("/:regionId")
    fetchById(req: Request, res: Response) {
        this.entityService
            .findById(req.params.regionId, req.queryParams)
            .then((result) => {
                // you don't need to catch the errors, because it the errors are in result.errors.
                res.send(result);
            });
    }
}