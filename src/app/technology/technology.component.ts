import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  topTechnologyDisplay: any = [];

  constructor(private technologyService: NewsapiserviceService) { }

  ngOnInit(): void {

    this.technologyService.topTechnology().subscribe((result) => {
      console.log(result);
      this.topTechnologyDisplay = result.articles;
    })
  }
}