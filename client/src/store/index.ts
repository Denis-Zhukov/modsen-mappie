import {combineReducers, configureStore} from '@reduxjs/toolkit';

import applicationReducer from './slices/application';
import bookmarksReducer from './slices/bookmarks';
import geolocationReducer from './slices/geolocation';

const reducers = combineReducers({
    geolocation: geolocationReducer,
    application: applicationReducer,
    bookmarks: bookmarksReducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch