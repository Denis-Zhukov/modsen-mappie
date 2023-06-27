import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getFavoritePlacesThunk} from '@store/slices/bookmarks/getFavoritePlacesThunk';
import {toggleFavoritePlaceThunk} from '@store/slices/bookmarks/toggleFavoritePlaceThunk';
import {IPlace} from '@typing/interfaces';

interface State {
    favoritePlaces: IPlace[],
    loadingFavoritePlaces: boolean,
    errorFavoritePlaces: null | any,

    resultTogglePlace: 'added' | 'deleted' | '',
    loadingToggleFavoritePlace: boolean,
    errorToggleFavoritePlace: null | any,
    successToggleFavoritePlace: boolean,
}

const initialState: State = {
    favoritePlaces: [],
    loadingFavoritePlaces: false,
    errorFavoritePlaces: null,

    resultTogglePlace: '',
    loadingToggleFavoritePlace: false,
    errorToggleFavoritePlace: null,
    successToggleFavoritePlace: false,
};

const bookmarksSlice = createSlice({
    initialState,
    name: 'bookmarks',
    reducers: {
        clearToggleStatus: (state) => {
            state.loadingToggleFavoritePlace = false;
            state.errorToggleFavoritePlace = null;
            state.successToggleFavoritePlace = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(toggleFavoritePlaceThunk.pending, (state) => {
                state.loadingToggleFavoritePlace = true;
                state.errorToggleFavoritePlace = null;
                state.successToggleFavoritePlace = false;
            })
            .addCase(toggleFavoritePlaceThunk.fulfilled, (state, {payload}: PayloadAction<{
                added: boolean,
                deleted: boolean
            }>) => {
                state.loadingToggleFavoritePlace = false;
                state.successToggleFavoritePlace = true;
                state.resultTogglePlace = payload.added ? 'added' : 'deleted';
            })
            .addCase(toggleFavoritePlaceThunk.rejected, (state, action) => {
                state.loadingToggleFavoritePlace = false;
                state.errorToggleFavoritePlace = action.error?.message ?? 'Не удалось загрузить данные';
                state.successToggleFavoritePlace = false;
            })

            .addCase(getFavoritePlacesThunk.pending, (state) => {
                state.loadingFavoritePlaces = true;
                state.errorFavoritePlaces = null;
            })
            .addCase(getFavoritePlacesThunk.fulfilled, (state, action) => {
                state.loadingFavoritePlaces = false;
                state.favoritePlaces = action.payload;
            })
            .addCase(getFavoritePlacesThunk.rejected, (state, action) => {
                state.loadingFavoritePlaces = false;
                state.errorFavoritePlaces = action.error?.message ?? 'Не удалось выполнить данную операцию';
            });
    },
});

export const {actions: bookmarksActions} = bookmarksSlice;
export default bookmarksSlice.reducer;