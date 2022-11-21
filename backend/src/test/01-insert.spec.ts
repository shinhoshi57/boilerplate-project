import { Aliment } from "../datasources/entity/aliment.entity";
import { testDatasource } from "../datasources/test.datasource";
import { sampleRepository } from "../sample/sample-repository";




describe('01 - Save Entity', () => {
    jest.setTimeout(100000);


    test('01 - Save Entity',  done => {
        let aliment:Aliment = new Aliment();
        aliment.name= "apple";
        aliment.type = "fruit"
        sampleRepository.insert(aliment).then(result=>{
            testDatasource.dataSource.destroy();
            done();
        })
    });

});
