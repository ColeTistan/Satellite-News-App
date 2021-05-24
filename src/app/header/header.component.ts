import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faBriefcase, faFlask, faFootballBall, faHandHoldingHeart, faHome, faLaptop, faVideo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  homeIcon = faHome;
  businessIcon = faBriefcase;
  entertainmentIcon = faVideo;
  healthIcon = faHandHoldingHeart;
  scienceIcon = faFlask;
  sportsIcon = faFootballBall;
  technologyIcon = faLaptop;
}
