import { createAction, props } from "@ngrx/store";
import {  API } from "@public-apis/api-interfaces";

// Select Entity

export const selectAPI = createAction(
    '[API] Select API',
    props<{ apiId: string }>()
);

// Load all Entities

export const loadAPIs = createAction(
    '[API] Load APIs'
);

export const loadAPIsSuccess = createAction(
    '[API] Load APIs Success',
    props<{ apis: API[]}>()
);

export const loadAPIsFailed = createAction(
    '[API] Load APIs Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadAPI = createAction(
    '[API] Load API',
    props<{ apiId: string}>()
);

export const loadAPISuccess = createAction(
    '[API] Load API Success',
    props<{ api: API}>()
);

export const loadAPIFailed = createAction(
    '[API] Load API Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createAPI = createAction(
    '[API] Create API',
    props<{ api: API}>()
);

export const createAPISuccess = createAction(
    '[API] Create API Success',
    props<{ api: API}>()
);

export const createAPIFailed = createAction(
    '[API] Create API Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateAPI = createAction(
    '[API] Update API',
    props<{ api: API}>()
);

export const updateAPISuccess = createAction(
    '[API] Update API Success',
    props<{ api: API}>()
);

export const updateAPIFailed = createAction(
    '[API] Create API Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteAPI = createAction(
    '[API] Delete API',
    props<{ api: API}>()
);

export const deleteAPISuccess = createAction(
    '[API] Delete API Success',
    props<{ api: API}>()
);

export const deleteAPIFailed = createAction(
    '[API] Create API Failed',
    props<{ error: any}>()
);