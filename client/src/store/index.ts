import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {api} from './quries/api';
import applicationReducer from './slices/application';
import geolocationReducer from './slices/geolocation';

const reducers = combineReducers({
    geolocation: geolocationReducer,
    application: applicationReducer,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch