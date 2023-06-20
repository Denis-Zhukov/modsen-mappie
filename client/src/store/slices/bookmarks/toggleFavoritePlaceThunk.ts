import {createAsyncThunk} from '@reduxjs/toolkit';

import {BookmarksService} from '../../../api/BookmarksService';

import type {RootState} from '@store/index';

export const toggleFavoritePlaceThunk = createAsyncThunk<any, number, { state: RootState }>(
    'bookmarks/toggleFavoritePlace',
    async (placeId, thunkAPI) => {
        return await BookmarksService.toggleFavoritePlace(placeId);
    }, {dispatchConditionRejection: true},
);