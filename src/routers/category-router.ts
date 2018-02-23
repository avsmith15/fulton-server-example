import { Category } from '../entities/category';
import { EntityRouter, entityRouter, Request, Response, httpPost, httpPatch, authorizedByRole } from 'fulton-server';

@entityRouter("/categories", Category)
export class CategoryRouter extends EntityRouter<Category>{
    onInit() {
        // remove delete action    
        this.metadata.actions.delete("delete");

        // add a middleware
        this.metadata.actions.get("update").middlewares.push(authorizedByRole("admin"));
    }

    // another way to override a http action to disable delete action
    // if the name of the method is the same its super, it will override the method, but keep the metadata    
    delete(req: Request, res: Response) {
        res.sendStatus(404);
    }


    // another way to override a http action to reset a router action.
    // if the name of the method is the same its super and the is a http action decorator, it will override the method and the metadata.
    @httpPatch("/:id", authorizedByRole("admin"))
    update(req: Request, res: Response) {
        super.update(req, res);
    }
}