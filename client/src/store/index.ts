import {combineReducers, configureStore} from '@reduxjs/toolkit';

const reducers = combineReducers({});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch