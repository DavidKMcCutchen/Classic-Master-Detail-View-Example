import { emptyAPI } from "@public-apis/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { apiAdapter, APIState, API_FEATURE_KEY } from "./apis.reducer";

export const getAPIState = createFeatureSelector<APIState>(API_FEATURE_KEY);

const { selectAll, selectEntities } = apiAdapter.getSelectors();

export const getAPIsLoaded = createSelector(
    getAPIState,
    (state: APIState) => state.loaded
);

export const getAPIError = createSelector(
    getAPIState,
    (state: APIState) => state.error
);

export const getAllAPIs = createSelector(
    getAPIState,
    (state: APIState) => selectAll(state)
);

export const getAPIEntities = createSelector(
    getAPIState,
    (state: APIState) => selectEntities(state)
);

export const getSelectedAPIId = createSelector(
    getAPIState,
    (state: APIState) => state.selectedId
);

export const getSelectedAPI = createSelector(
    getAPIEntities,
    getSelectedAPIId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyAPI
);