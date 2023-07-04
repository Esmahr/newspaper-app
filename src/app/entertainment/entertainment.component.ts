import { Component, OnInit  } from '@angular/core';
import {NewsapiserviceService} from '../newsapiservice.service'

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent  implements OnInit {
  topEntertainmentDisplay: any = [];

  constructor(private entertainmentService: NewsapiserviceService) { }
  
  ngOnInit(): void {

    this.entertainmentService.topEntertainment().subscribe((result) => {
      console.log(result);
      this.topEntertainmentDisplay = result.articles;
    })
  }

}

