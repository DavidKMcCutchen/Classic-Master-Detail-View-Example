import { API } from "@public-apis/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as APIActions from './apis.actions';

export const API_FEATURE_KEY = 'apis';

export interface APIState extends EntityState<API> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface APIPartialState {
    readonly [API_FEATURE_KEY]: APIState
};

export const apiAdapter: EntityAdapter<API> = createEntityAdapter<API>({ selectId: (a) => a.API});

export const initialAPIState: APIState = apiAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): APIState => ({ ...state, error});

const onDispatch = (state, action): APIState => ({
    ...state,
    loaded: false,
    error: null
});

const _apiReducer = createReducer(
    initialAPIState,
    on(
        APIActions.loadAPIFailed,
        APIActions.loadAPIsFailed,
        APIActions.createAPIFailed,
        APIActions.updateAPIFailed,
        APIActions.deleteAPIFailed,
        onFailed
    ),
    on(
        APIActions.loadAPI,
        APIActions.loadAPIs,
        APIActions.createAPI,
        APIActions.updateAPI,
        APIActions.deleteAPI,
        onDispatch
    ),
    on(
        APIActions.loadAPISuccess, (state, { api }) =>
        apiAdapter.upsertOne(api, {...state, loaded: true})
    ),
    on(
        APIActions.selectAPI, (state, { apiId }) => ({
            ...state,
            selectedId: apiId
        })
    ),
    on(
        APIActions.loadAPIsSuccess, (state, { apis }) =>
        apiAdapter.setAll(apis, {...state, loaded: true})
    ),
    on(
        APIActions.deleteAPISuccess, (state, { api }) =>
        apiAdapter.removeOne(api.API, {...state, loaded: true})
    ),
    on(
        APIActions.updateAPISuccess, (state, { api }) =>
        apiAdapter.updateOne(
            {id: api.API, changes: api},
            {...state, loaded: true}
        )
    ),
    on(
        APIActions.createAPISuccess, (state, {api }) =>
        apiAdapter.addOne(api, {...state, loaded: true})
    ),
)

export function apiReducer(
    state: APIState | undefined,
    action: Action
) {
    return _apiReducer(state, action)
}