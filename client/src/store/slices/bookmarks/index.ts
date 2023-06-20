import {createSlice} from '@reduxjs/toolkit';
import {getFavoritePlacesThunk} from '@store/slices/bookmarks/getFavoritePlacesThunk';
import {toggleFavoritePlaceThunk} from '@store/slices/bookmarks/toggleFavoritePlaceThunk';
import {IPlace} from '@typing/interfaces';

interface State {
    favoritePlaces: IPlace[]
    loading: boolean,
    error: null | any,
}

const initialState: State = {
    favoritePlaces: [],
    loading: false,
    error: null,
};

const bookmarksSlice = createSlice({
    initialState,
    name: 'bookmarks',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(toggleFavoritePlaceThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(toggleFavoritePlaceThunk.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(toggleFavoritePlaceThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getFavoritePlacesThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFavoritePlacesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.favoritePlaces = action.payload;
            })
            .addCase(getFavoritePlacesThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            });
    },
});

export const {actions: bookmarksActions} = bookmarksSlice;
export default bookmarksSlice.reducer;