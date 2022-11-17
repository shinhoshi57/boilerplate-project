import { sampleController } from "./sample-controller";
import { Application } from "express";


export class SampleRoutes{



    public routes(app:Application):void{

            app.route("/api/sample").get(sampleController.sample);

    }



}


export const sampleRoutes = new SampleRoutes();