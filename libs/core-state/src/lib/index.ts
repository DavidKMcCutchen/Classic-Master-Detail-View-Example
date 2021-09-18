import { ActionReducerMap } from "@ngrx/store";
import * as fromAPIs from './apis/apis.reducer';

export interface AppState {
    [fromAPIs.API_FEATURE_KEY]: fromAPIs.APIState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromAPIs.API_FEATURE_KEY]: fromAPIs.apiReducer
};