import { Component, OnInit } from '@angular/core';
import {NewsApiService} from '../news-api-service.service';

@Component({
  selector: 'app-business-articles',
  templateUrl: './business-articles.component.html',
  styleUrls: ['./business-articles.component.scss']
})
export class BusinessArticlesComponent implements OnInit {

  constructor(private _services:NewsApiService) { }
  
  articles:any = [];

  ngOnInit(): void {
    this._services.businessArticles().subscribe((result) => {
      console.log(result);
      this.articles = result.articles;
    })
  }

}
