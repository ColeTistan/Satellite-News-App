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
import { FooterComponent } from './footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    TopArticlesComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    LayoutModule,
    MatListModule
  ],

  providers: [NewsApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
