import { ActionReducerMap } from "@ngrx/store";
import * as fromAPIs from './apis/apis.reducer';
import * as fromAuth from './auth/auth.reducer';

export interface AppState {
    [fromAPIs.API_FEATURE_KEY]: fromAPIs.APIState;
    [fromAuth.AUTH_FEATURE_KEY]: fromAuth.FeaturesAuthState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromAPIs.API_FEATURE_KEY]: fromAPIs.apiReducer,
    [fromAuth.AUTH_FEATURE_KEY]: fromAuth.authReducer
};