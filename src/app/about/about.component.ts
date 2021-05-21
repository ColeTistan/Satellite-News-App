import { Component, OnInit } from '@angular/core';
import { faAngular, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  angularIcon = faAngular;
  githubIcon = faGithub;
  newspaperIcon = faNewspaper;
}
