import {BookmarksService} from '@api';
import {createAsyncThunk} from '@reduxjs/toolkit';

import type {RootState} from '@store/index';
import type {IPlace} from '@typing/interfaces';

export const getFavoritePlacesThunk = createAsyncThunk<IPlace[], void, { state: RootState }>(
    'bookmarks/getFavoritePlaces',
    async () => await BookmarksService.getFavoritePlaces(),
    {dispatchConditionRejection: true},
);
