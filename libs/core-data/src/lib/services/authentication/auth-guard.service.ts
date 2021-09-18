import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router'
import { NotificationsService } from '../notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private route: Router,
    private authService: AuthService,
    private notify: NotificationsService
    ) { }

  canActivate() {
    if(!this.authService.isAuthenticated.value) {
      this.notify.notify('Invalid User');
      return false
    } else {
      this.notify.notify('Succesfully Logged In');
      return true;
    }
  }
}
