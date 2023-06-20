import {createAsyncThunk} from '@reduxjs/toolkit';

import {BookmarksService} from '../../../api/BookmarksService';

import type {RootState} from '@store/index';

export const getFavoritePlacesThunk = createAsyncThunk<any, void, { state: RootState }>(
    'bookmarks/getFavoritePlaces',
    async (state, thunkAPI) => {
        return await BookmarksService.getFavoritePlaces();
    }, {dispatchConditionRejection: true},
);