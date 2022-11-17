import { Injectable } from "@angular/core";
import { Observable, sample } from "rxjs";
import { HttpService } from "./http.service";


@Injectable()
export class SampleService{


    constructor(
        private httpService: HttpService
    
    ){}

    sample():Observable<any>{
        let url="http://localhost:8000/api/sample"
        return this.httpService.doGet(url, "");
    }


    
}