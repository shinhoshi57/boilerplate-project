import { sampleService } from "./sample-service";
import { Request, Response } from "express";
import { Aliment } from "../datasources/entity/aliment.entity";



export class SampleController{


    sample(req:Request, res:Response){

        let result = sampleService.sample();
        res.status(200).send({response:"result is the packs"});

    }


    sampleCall(req:Request, res:Response){

        sampleService.sample_async().subscribe((result:Aliment)=>{


            res.status(200).send(result);


        });
    }

    insert(req:Request, res:Response){

        sampleService.create();

        res.status(200).send("perfect");
    }



}


export const sampleController = new SampleController();