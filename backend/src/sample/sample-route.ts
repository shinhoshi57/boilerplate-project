import { sampleController } from "./sample-controller";
import { Application } from "express";


export class SampleRoutes{



    public routes(app:Application):void{

            app.route("/api/sample").get(sampleController.sample);
            app.route("/api/sample_async").get(sampleController.sampleCall);

    }



}


export const sampleRoutes = new SampleRoutes();