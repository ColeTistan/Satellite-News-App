import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Angular Components and Services
import { AppComponent } from './app.component';
import { TopArticlesComponent } from './top-articles/top-articles.component';

// Common Angular modules
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TopArticlesComponent,
    AboutComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],

  providers: [NewsApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
