import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearch(query: string) {
    return this.http.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=676f017549224f488970f1835f9db971`)
  }
}

