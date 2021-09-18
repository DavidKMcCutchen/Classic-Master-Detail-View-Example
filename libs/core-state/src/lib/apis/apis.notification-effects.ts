import { Injectable } from '@angular/core';
import { NotificationsService } from '@public-apis/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as APIsActions from './apis.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(APIsActions.createAPISuccess),
        tap(() => this.notificationService.notify('Create API Successful'))
      ),
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(APIsActions.updateAPISuccess),
        tap(() => this.notificationService.notify('Update API Successful'))
      ),
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(APIsActions.deleteAPISuccess),
        tap(() => this.notificationService.notify('Delete API Successful'))
      ),
    { dispatch: false }
  );

  loadAllSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(APIsActions.loadAPIsSuccess),
        tap(() => this.notificationService.notify('Load APIs Successful'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}
