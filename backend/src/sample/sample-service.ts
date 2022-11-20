import { Aliment } from "../datasources/entity/aliment.entity";
import { Observable } from "rxjs";
import { httpService } from "../services/http.service";
import { testDatasource } from "../datasources/test.datasource";





export class SampleService {

    constructor() { }


    sample(): string {
        return "Hello World!";
    }

    create(){


        const repo= testDatasource.getRepository(Aliment);

        let ali:Aliment=new Aliment();

        ali.name="tomato";
        ali.type="fruit";

        repo.save(ali);

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