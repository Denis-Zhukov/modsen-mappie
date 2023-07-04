import {PlacesService} from '@api';
import {createAsyncThunk} from '@reduxjs/toolkit';

import type {RootState} from '@store/index';
import type {IPlaceWithoutDescription} from '@typing/interfaces';

export const getPlacesThunk = createAsyncThunk<IPlaceWithoutDescription[], void, { state: RootState }>(
    'geolocation/get-places',
    async (_, thunkApi) => {
        const {personCoords: [lat, lon], radius} = thunkApi.getState().geolocation;
        if (!lat || !lon) return [];
        return await PlacesService.getPlaces({lat, lon, radius, filter: thunkApi.getState().application.typeFilter});
    },
    {dispatchConditionRejection: true},
);
