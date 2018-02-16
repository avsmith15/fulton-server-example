import { Router, router, httpGet, authorized, Response, Request } from "fulton-server";

@router("/me", { title: "My Profile", description: "Show my profile" }, authorized())
export class MeRouter extends Router {

    @httpGet()
    profile(req: Request, res: Response) {
        res.send(req.user);
    }
}