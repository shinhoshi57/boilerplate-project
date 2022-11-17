import { sampleService } from "./sample-service";
import { Request, Response } from "express";



export class SampleController{


    sample(req:Request, res:Response){

        let result = sampleService.sample();
        res.status(200).send({response:"result is the packs"});

    }


    sampleCall(req:Request, res:Response){

        sampleService.sample_async().subscribe((result:any)=>{


            res.status(200).send(result);


        });
    }



}


export const sampleController = new SampleController();