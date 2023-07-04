import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  topHeadingDisplay: any = [];

  constructor(private myDataService: NewsapiserviceService) { }

  ngOnInit(): void {
    this.myDataService.topHeading().subscribe((result) => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }

}
