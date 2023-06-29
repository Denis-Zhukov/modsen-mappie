import {BookmarksService} from '@api';
import {createAsyncThunk} from '@reduxjs/toolkit';

import type {RootState} from '@store/index';
import type {IToggleFavoritePlaceResponse} from '@typing/interfaces';


export const toggleFavoritePlaceThunk = createAsyncThunk<IToggleFavoritePlaceResponse, number, { state: RootState }>(
    'bookmarks/toggleFavoritePlace',
    async (placeId) => await BookmarksService.toggleFavoritePlace(placeId) as IToggleFavoritePlaceResponse,
    {dispatchConditionRejection: true},
);
