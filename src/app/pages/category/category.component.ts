import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../../newsapiservice.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  topBussinessDisplay: any = [];

  constructor(private myDataService: NewsapiserviceService) { }

  ngOnInit(): void {
    this.myDataService.topBusiness().subscribe((result) => {
      console.log(result);
      this.topBussinessDisplay = result.articles;
    })
  }
}

