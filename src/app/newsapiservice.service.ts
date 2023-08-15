import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=e71a6cd1653346adb8ff9f65f12970c6"
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl)
  }

  businessUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=676f017549224f488970f1835f9db971"
  topBusiness(): Observable<any> {
    return this._http.get(this.businessUrl);
  }

  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=676f017549224f488970f1835f9db971"
  topHealth(): Observable<any> {
    return this._http.get(this.healthApiUrl);
  }

  sciencetApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=676f017549224f488970f1835f9db971"
  topScience(): Observable<any> {
    return this._http.get(this.sciencetApiUrl);
  }

  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=676f017549224f488970f1835f9db971"
  topEntertainment(): Observable<any> {
    return this._http.get(this.entertainmentApiUrl);
  }

  technologyApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=676f017549224f488970f1835f9db971"
  topTechnology(): Observable<any> {
    return this._http.get(this.technologyApiUrl);
  }

  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=676f017549224f488970f1835f9db971"
  topSports(): Observable<any> {
    return this._http.get(this.sportsApiUrl);
  }

}
