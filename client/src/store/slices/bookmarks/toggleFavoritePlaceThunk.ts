import {BookmarksService} from '@api/BookmarksService';
import {createAsyncThunk} from '@reduxjs/toolkit';

import type {RootState} from '@store/index';

export const toggleFavoritePlaceThunk = createAsyncThunk<any, number, { state: RootState }>(
    'bookmarks/toggleFavoritePlace',
    async (placeId) => {
        await BookmarksService.toggleFavoritePlace(placeId);
    }, {dispatchConditionRejection: true},
);