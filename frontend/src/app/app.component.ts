import { Component, OnInit } from '@angular/core';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  value ="empty";

  constructor(private sampleService:SampleService){}

  ngOnInit(): void {


    this.sampleService.sample().subscribe((result:any)=>{
      this.value=result.response;
    });

  }
}
