import { Component, OnInit } from '@angular/core';
import { faAngular, faGithub, faUikit } from '@fortawesome/free-brands-svg-icons';
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

  // declare font awesome icons for UI
  angularIcon = faAngular;
  githubIcon = faGithub;
  newspaperIcon = faNewspaper; 
  materialIcon = faUikit;
}
