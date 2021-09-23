import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { FeaturesAuthFacade } from '@public-apis/core-state';
@Component({
  selector: 'public-apis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated$ = this.authFacade.isUserAuthenticated$;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  title= 'Public APIs';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'entries', icon: 'view_list', title: 'Public APIs'}
  ];



  constructor(private authFacade: FeaturesAuthFacade) {}

  logoutAttempt() {
    this.authFacade.logout();
  }

  register() {
    this.authFacade.register();
  }
}

