import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsApiService {

  constructor(private _http:HttpClient) { }

    // list of categories
    categories = [
      'business',
      'entertainment',
      'general', 
      'health',
      'science', 
      'sports', 
      'technology'
    ]

    defaultCountry = 'us'

  //API URL and parameters to retrieve data

  // countryParam = `country=${this.country}&`
  // categoryParam = `category=${this.category}&`
  apiKey = `apiKey=5ba299e7890845fd88e4c936f97e5468`
  baseUrl = `https://newsapi.org/v2/top-headlines?${this.apiKey}`
  
  articleBuilder(category :string, country :string)
  { 
    return this._http.get(`${this.baseUrl}&category=${category}&country=${country}`);
  }
  
  // GET Request to pass async messages
  businessArticles():Observable<any>
  {
    return this.articleBuilder(this.categories[0], this.defaultCountry);
  }

  entertainmentArticles():Observable<any> 
  {
    return this.articleBuilder(this.categories[1], this.defaultCountry);
  }

  generalArticles():Observable<any> 
  {
    return this.articleBuilder(this.categories[2], this.defaultCountry);
  }

  healthArticles():Observable<any>
  {
    return this.articleBuilder(this.categories[3], this.defaultCountry);
  }

  scienceArticles():Observable<any>
  {
    return this.articleBuilder(this.categories[4], this.defaultCountry);
  }

  sportsArticles():Observable<any>
  {
    return this.articleBuilder(this.categories[5], this.defaultCountry);
  }

  technologyArticles():Observable<any>
  {
    return this.articleBuilder(this.categories[6], this.defaultCountry);
  }
}
