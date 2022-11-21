import { Aliment } from "../datasources/entity/aliment.entity";
import { testDatasource } from "../datasources/test.datasource";





class SampleRepository {



    constructor() {


    }

    
    public insert(elem: Aliment): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            testDatasource.getRepository(Aliment).then(repository => {
                repository.save(elem).then(result => {
                    resolve(result);
                }, error => {
                    reject(error);
                });

            })
        });
    }

}


export const sampleRepository = new SampleRepository();