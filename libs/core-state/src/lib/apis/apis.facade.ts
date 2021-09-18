import { Injectable } from "@angular/core";
import { API } from "@public-apis/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as APIActions from './apis.actions';
import * as APISelectors from './apis.selectors';
import * as fromAPIs from './apis.reducer';


@Injectable({
    providedIn: 'root'
})

export class APIFacade {
    allAPIs$ = this.store.pipe(
        map((state) => APISelectors.getAllAPIs(state)),
    )
    selectedAPIs$ = this.store.pipe(select(APISelectors.getSelectedAPI));
    loaded$ = this.store.pipe(select(APISelectors.getAPIsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === APIActions.createAPI({} as any) .type ||
        action.type === APIActions.updateAPI({} as any) .type ||
        action.type === APIActions.deleteAPI({} as any) .type 
        ))

        selectAPI(apiId: string) {
            this.dispatch(APIActions.selectAPI({ apiId }));
        };

        loadAPIs() {
            this.dispatch(APIActions.loadAPIs())
        };

        loadAPI(apiId: string) {
            this.dispatch(APIActions.loadAPI({ apiId }))
        };

        saveAPI(api: API) {
            api.API ? this.updateAPI(api) : this.createAPI(api)
        };

        createAPI(api: API) {
            this.dispatch(APIActions.createAPI({ api }))
        };

        updateAPI(api: API) {
            this.dispatch(APIActions.updateAPI({ api }))
        };

        deleteAPI(api: API) {
            this.dispatch(APIActions.deleteAPI({ api }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromAPIs.APIPartialState>,
            private actions$: ActionsSubject
        ) {}
}