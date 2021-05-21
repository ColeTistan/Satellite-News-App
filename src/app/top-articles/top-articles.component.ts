import { Component, OnInit } from '@angular/core';
import {NewsApiService} from '../news-api-service.service';

@Component({
  selector: 'app-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.scss']
})
export class TopArticlesComponent implements OnInit {

  constructor(private _services:NewsApiService) { }
  
  articles:any = [];

  ngOnInit(): void {
    this._services.topArticles().subscribe((result) => {
      console.log(result);
      this.articles = result.articles;
    })
  }

}
