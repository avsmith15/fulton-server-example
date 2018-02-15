import { FultonApp, FultonAppOptions } from "fulton-server"

export class NorthWindApp extends FultonApp {
    protected onInit(options: FultonAppOptions): void {
        // enabled swagger docs
        options.docs.enabled = true;
    }
}