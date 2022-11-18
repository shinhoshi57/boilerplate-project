import { Aliment } from "../model/user.model";
import { Observable } from "rxjs";
import { httpService } from "../services/http.service";





export class SampleService {

    constructor() { }


    sample(): string {
        return "Hello World!";
    }

    sample_async(): Observable<Aliment> {

        return new Observable(observer => {

            httpService.doGet("https://sarrado-test.free.beeceptor.com/api/sample").subscribe({
                next: (aliments) => {
                    let result: Aliment = new Aliment();

                    for (let aliment of aliments) {
                        if (aliment.type = "fruit")
                            result = aliment;
                    }

                    observer.next(result);
                    observer.complete();
                },
                error: (error) => {

                    observer.error(error);
                }
            }

            );

        });
    }

}


export const sampleService = new SampleService();