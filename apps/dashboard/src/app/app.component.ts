import { Component } from '@angular/core';
import { FeaturesAuthFacade } from '@public-apis/core-state';
@Component({
  selector: 'public-apis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated$ = this.authFacade.isUserAuthenticated$;
  title= 'Public APIs';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'entries', icon: 'view_list', title: 'Public APIs'}
  ];

  constructor(private authFacade: FeaturesAuthFacade) {}

  logoutAttempt() {
    this.authFacade.logout();
  }
}

