import {BookmarksService} from '@api/BookmarksService';
import {createAsyncThunk} from '@reduxjs/toolkit';

import type {RootState} from '@store/index';

export const toggleFavoritePlaceThunk = createAsyncThunk<any, number, { state: RootState }>(
    'bookmarks/toggleFavoritePlace',
    async (placeId) => {
        const {data} = await BookmarksService.toggleFavoritePlace(placeId);
        return data;
    }, {dispatchConditionRejection: true},
);