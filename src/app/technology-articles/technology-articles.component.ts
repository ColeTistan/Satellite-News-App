import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api-service.service';

@Component({
  selector: 'app-technology-articles',
  templateUrl: './technology-articles.component.html',
  styleUrls: ['./technology-articles.component.scss']
})
export class TechnologyArticlesComponent implements OnInit {

  constructor(private _services:NewsApiService) { }
  
  articles:any = [];

  ngOnInit(): void {
    this._services.technologyArticles().subscribe((result) => {
      console.log(result);
      this.articles = result.articles;
    })
  }

}
