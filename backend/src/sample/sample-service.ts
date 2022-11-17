import { Observable } from "rxjs";
import { httpService } from "../services/http.service";





export class SampleService{

        constructor(){}


        sample():string{
            return "Hello World!";
        }

        sample_async():Observable<any>{

            return new Observable(observer=>{

                httpService.doGet("https://reqres.in/api/users/2").subscribe((result:any)=>{

                    observer.next(result);
                    observer.complete();

                },(error:Error)=>{

                    observer.error(error);
                });


            });

        }


}


export const sampleService = new SampleService();