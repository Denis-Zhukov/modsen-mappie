import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {api} from './quries/api';
import applicationReducer from './slices/application.slice';
import mapReducer from './slices/map.slice';
import personReducer from './slices/person.slice';

const reducers = combineReducers({
    map: mapReducer,
    person: personReducer,
    application: applicationReducer,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch