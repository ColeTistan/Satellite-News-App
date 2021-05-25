import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api-service.service';

@Component({
  selector: 'app-sports-articles',
  templateUrl: './sports-articles.component.html',
  styleUrls: ['./sports-articles.component.scss']
})
export class SportsArticlesComponent implements OnInit {

  constructor(private _services:NewsApiService) { }
  
  articles:any = [];

  ngOnInit(): void {
    this._services.sportsArticles().subscribe((result) => {
      console.log(result);
      this.articles = result.articles;
    })
  }

}
