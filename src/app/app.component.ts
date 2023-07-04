import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NewsapiserviceService } from './newsapiservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  topHeadingDisplay: any = [];

  constructor(private myDataService: NewsapiserviceService) { }

  ngOnInit(): void {
    this.myDataService.topHeading().subscribe((result) => {
      console.log(result);
      this.topHeadingDisplay=result.articles;
    })
  }

}