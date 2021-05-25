import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api-service.service';

@Component({
  selector: 'app-health-articles',
  templateUrl: './health-articles.component.html',
  styleUrls: ['./health-articles.component.scss']
})
export class HealthArticlesComponent implements OnInit {

  constructor(private _services:NewsApiService) { }
  
  articles:any = [];

  ngOnInit(): void {
    this._services.healthArticles().subscribe((result) => {
      console.log(result);
      this.articles = result.articles;
    })
  }
}
