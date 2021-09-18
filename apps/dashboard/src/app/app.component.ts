import { Component } from '@angular/core';
@Component({
  selector: 'public-apis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Public APIs';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'entries', icon: 'view_list', title: 'Public APIs'}
  ]
}
