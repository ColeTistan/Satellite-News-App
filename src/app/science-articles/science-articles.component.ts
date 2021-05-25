import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api-service.service';

@Component({
  selector: 'app-science-articles',
  templateUrl: './science-articles.component.html',
  styleUrls: ['./science-articles.component.scss']
})
export class ScienceArticlesComponent implements OnInit {

  constructor(private _services:NewsApiService) { }
  
  articles:any = [];

  ngOnInit(): void {
    this._services.scienceArticles().subscribe((result) => {
      console.log(result);
      this.articles = result.articles;
    })
  }

}
