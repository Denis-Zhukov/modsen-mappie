import {createAsyncThunk} from '@reduxjs/toolkit';

import {PlacesService} from '../../../api/PlacesService';

import type {RootState} from '@store/index';
import type {IPlace} from '@typing/interfaces';
import type {AxiosResponse} from 'axios';

export const getInfoAboutPlaceThunk = createAsyncThunk<any, void, { state: RootState }>(
    'application/getInfoAboutPlaceThunk',
    async (state, thunkAPI) => {

        const id = +thunkAPI.getState().application.currentPlaceId;
        const response: AxiosResponse<IPlace> = await PlacesService.getPlaceById(id);
        return response.data;
    }, {dispatchConditionRejection: true},
);