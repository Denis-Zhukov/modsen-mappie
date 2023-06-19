import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import type {RootState} from '@store/index';
import type {IPlace} from '@typing/interfaces';
import type {AxiosResponse} from 'axios';


export const getPlacesThunk = createAsyncThunk<any, void, { state: RootState }>(
    'geolocation/get-places',
    async (a, thunkApi): Promise<IPlace[]> => {
        const {personCoords: [lat, lon], radius} = thunkApi.getState().geolocation;
        if (!lat || !lon) return [];

        const url = `${process.env.REACT_APP_BACK_END}/all-places?latitude=${lat}&longitude=${lon}&radius=${radius}`;
        const response: AxiosResponse<IPlace[]> = await axios.get(url);
        return response.data;
    },
);