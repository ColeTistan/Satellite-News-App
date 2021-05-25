import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BusinessArticlesComponent } from './business-articles/business-articles.component';
import { EntertainmentArticlesComponent } from './entertainment-articles/entertainment-articles.component';
import { HealthArticlesComponent } from './health-articles/health-articles.component';
import { ScienceArticlesComponent } from './science-articles/science-articles.component';
import { SportsArticlesComponent } from './sports-articles/sports-articles.component';
import { TechnologyArticlesComponent } from './technology-articles/technology-articles.component';
import { TopArticlesComponent } from './top-articles/top-articles.component';

const routes: Routes = [
  {path: '', component:TopArticlesComponent},
  {path: 'business', component:BusinessArticlesComponent},
  {path: 'entertainment', component:EntertainmentArticlesComponent},
  {path: 'health', component:HealthArticlesComponent},
  {path: 'science', component:ScienceArticlesComponent},
  {path: 'sports', component:SportsArticlesComponent},
  {path: 'technology', component:TechnologyArticlesComponent},
  {path: 'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
