import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { API } from "@public-apis/api-interfaces";
import { APIsService } from "@public-apis/core-data";
import * as APIActions from './apis.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class APIEffects{
    loadAPI$ = createEffect(() =>
        this.actions$.pipe(
            ofType(APIActions.loadAPI),
            fetch({
                run: (action) =>
                    this.apisService
                        .getOne(action.apiId)
                        .pipe(map((api: API) => APIActions.loadAPISuccess({ api }))),
                    onError: (action, error) => APIActions.loadAPIFailed({ error })    
            })
        ));
    loadAPIs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(APIActions.loadAPIs),
            fetch({
                run: () =>
                    this.apisService
                    .getAll()
                    .pipe(
                        map((apis: API[]) => APIActions.loadAPIsSuccess({ apis }))
                    ),
                onError: (action, error) => APIActions.loadAPIsFailed({ error })    
            })
        ));
    //     createAPI$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(APIActions.createAPI),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.apisService
    //                     .create(action.api)
    //                     .pipe(map((api: API) => APIActions.createAPISuccess({ api }))),
    //                 onError: (action, error) => APIActions.createAPIFailed({ error })    
    //         })
    // ));

    // updateAPI$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(APIActions.updateAPI),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.apisService
    //                     .update(action.api)
    //                     .pipe(map((api: API) => APIActions.updateAPISuccess({ api}))),
    //                 onError: (action, error) => APIActions.updateAPIFailed({ error })    
    //         })
    // ));

    // deleteAPI$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(APIActions.deleteAPI),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.apisService
    //                     .delete(action.api)
    //                     .pipe(
    //                         map(() => APIActions.deleteAPISuccess({ api: action.api }))
    //                     ),
    //                 onError: (action, error) => APIActions.deleteAPIFailed({ error })    
    //         })
    //     ));    


    constructor(
        private actions$: Actions,
        private apisService: APIsService
    ) {}    
}