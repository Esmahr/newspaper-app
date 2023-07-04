import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topHeadingDisplay: any = [];

  constructor(private myDataService: NewsapiserviceService) { }

  ngOnInit(): void {
    this.myDataService.topHeading().subscribe((result) => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }
}