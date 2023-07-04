import { Component, OnInit  } from '@angular/core';
import {NewsapiserviceService} from '../newsapiservice.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent  implements OnInit {
  topBusinessDisplay: any = [];

  constructor(private bussinessService: NewsapiserviceService) { }
  
  ngOnInit(): void {

    this.bussinessService.topBusiness().subscribe((result) => {
      console.log(result);
      this.topBusinessDisplay = result.articles;
    })
  }

}



