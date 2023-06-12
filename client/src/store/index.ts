import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {api} from './quries/api';
import mapReducer from './slices/map.slice';
import positionReducer from './slices/position.slice';

const reducers = combineReducers({
    map: mapReducer,
    position: positionReducer,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch