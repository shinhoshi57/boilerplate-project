import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { sampleRoutes } from "../sample/sample-route";
import { testDatasource } from "../datasources/test.datasource";


class App {

    public app: express.Application;

    constructor() {
        console.log('Starting equinox-admin-panel-api...');
        this.app = express();
        console.log('Configuring express...');
        this.config();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //const corsOrigin = process.env.EQUINOX_ADMIN_PANEL_WEB || config.get(config.EQUINOX_ADMIN_PANEL_WEB);

        var corsOptions: cors.CorsOptions = {
            origin: "frontend",
            credentials: true,
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
        }

        this.app.use(cors(corsOptions));
        this.app.use(bodyParser.urlencoded({ extended: false }));

        sampleRoutes.routes(this.app);
        this.initializeDb();
    }

    private async initializeDb(){

        await testDatasource.initalize();

        

    }
}

export default new App().app;
