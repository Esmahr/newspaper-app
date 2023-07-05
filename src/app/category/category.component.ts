import { take } from 'rxjs';
import { SearchService } from './category.component.service';
import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private myDataService: SearchService) { }
  searchNews: any;
  query: any;
  searchFilter(e: any) {
    this.query = e.target.value

    this.myDataService
      .getSearch(this.query)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.searchNews = data.results;
      })
  }
  ngOnInit(): void {
  }
}

