import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {api} from './quries/api';
import mapReducer from './slices/map.slice';
import personReducer from './slices/person.slice';

const reducers = combineReducers({
    map: mapReducer,
    person: personReducer,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch