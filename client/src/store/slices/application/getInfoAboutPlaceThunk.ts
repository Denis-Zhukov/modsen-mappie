import {PlacesService} from '@api';
import {createAsyncThunk} from '@reduxjs/toolkit';

import type {RootState} from '@store/index';
import type {ISpecificPlace} from '@typing/interfaces';

export const getInfoAboutPlaceThunk = createAsyncThunk<ISpecificPlace, void, { state: RootState }>(
    'application/getInfoAboutPlaceThunk',
    async (state, thunkAPI) => {
        const id = thunkAPI.getState().application.currentPlaceId;
        return await PlacesService.getPlaceById(id);
    },
    {dispatchConditionRejection: true},
);
