import { Component, OnInit  } from '@angular/core';
import {NewsapiserviceService} from '../newsapiservice.service'

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  topHealthDisplay: any = [];

  constructor(private healthService: NewsapiserviceService) { }
  
  ngOnInit(): void {

    this.healthService.topHealth().subscribe((result) => {
      console.log(result);
      this.topHealthDisplay = result.articles;
    })
  }


}


