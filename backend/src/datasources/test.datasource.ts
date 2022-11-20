import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm"

export class TestDatasouce{

    dataSource:DataSource;

    constructor(){

        this.dataSource = new DataSource(
            { 
                    type: "mysql", 
                    host: "localhost", 
                    port: 3306, 
                    username: "root", 
                    password: "pass", 
                    database: "test", 
                    entities: [ 
                        __dirname + "/entity/*.{js,ts}" 
                    ], 
                    synchronize: true, 
                    logging: false 
            });
    }
    initalize():Promise<DataSource>{
        return this.dataSource.initialize();
    }

    getRepository(elem:EntityTarget<ObjectLiteral>):Repository<ObjectLiteral>{

        return this.dataSource.getRepository(elem);
    }

}


export const testDatasource = new TestDatasouce();

