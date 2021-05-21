import { Component, ElementRef} from '@angular/core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBriefcase, faFlask, faFootballBall, faHandHoldingHeart, faHome, faLaptop, faVideo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _elementRef : ElementRef) { }

  title = 'satellite-news-app';

  barIcon = faBars;
  homeIcon = faHome;
  businessIcon = faBriefcase;
  entertainmentIcon = faVideo;
  healthIcon = faHandHoldingHeart;
  scienceIcon = faFlask;
  sportsIcon = faFootballBall;
  technologyIcon = faLaptop;
}
