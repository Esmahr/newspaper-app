import { Component, OnInit  } from '@angular/core';
import {NewsapiserviceService} from '../newsapiservice.service'

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  topScienceDisplay: any = [];

  constructor(private scienceService: NewsapiserviceService) { }
  
  ngOnInit(): void {

    this.scienceService.topScience().subscribe((result) => {
      console.log(result);
      this.topScienceDisplay = result.articles;
    })
  }


}