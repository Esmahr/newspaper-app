import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearch(query: string) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=2937a1755f75e11815ec137a11f8c4b3&query=' + query)
  }
}

