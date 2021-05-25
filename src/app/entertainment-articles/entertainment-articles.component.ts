import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api-service.service';

@Component({
  selector: 'app-entertainment-articles',
  templateUrl: './entertainment-articles.component.html',
  styleUrls: ['./entertainment-articles.component.scss']
})
export class EntertainmentArticlesComponent implements OnInit {

  constructor(private _services:NewsApiService) { }
  
  articles:any = [];

  ngOnInit(): void {
    this._services.entertainmentArticles().subscribe((result) => {
      console.log(result);
      this.articles = result.articles;
    })
  }
}
