import { Component, OnInit  } from '@angular/core';
import {NewsapiserviceService} from '../newsapiservice.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  topSportsDisplay: any = [];

  constructor(private sportsService: NewsapiserviceService) { }
  
  ngOnInit(): void {

    this.sportsService.topSports().subscribe((result) => {
      console.log(result);
      this.topSportsDisplay = result.articles;
    })
  }
}
