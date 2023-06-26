import {PlacesService} from '@api/PlacesService';
import {createAsyncThunk} from '@reduxjs/toolkit';

import type {RootState} from '@store/index';
import type {IPlace} from '@typing/interfaces';
import type {AxiosResponse} from 'axios';


export const getPlacesThunk = createAsyncThunk<any, void, { state: RootState }>(
    'geolocation/get-places',
    async (a, thunkApi): Promise<(Omit<IPlace, 'tags'> & { name: string })[]> => {
        const {personCoords: [lat, lon], radius} = thunkApi.getState().geolocation;
        if (!lat || !lon) return [];

        const response: AxiosResponse<(Omit<IPlace, 'tags'> & { name: string })[]> = await PlacesService.getPlaces(lat, lon, radius, thunkApi.getState().application.typeFilter);
        return response.data;
    }, {dispatchConditionRejection: true},
);