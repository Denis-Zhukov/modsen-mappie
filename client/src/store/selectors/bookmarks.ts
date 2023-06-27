import {RootState} from '@store/index';

export const selectToggleFavoriteStatus = ({
    bookmarks: {
        successToggleFavoritePlace,
        errorToggleFavoritePlace,
        loadingToggleFavoritePlace,
        resultTogglePlace,
    },
}: RootState) => ({
    result: resultTogglePlace,
    success: successToggleFavoritePlace,
    error: errorToggleFavoritePlace,
    loading: loadingToggleFavoritePlace,
});

export const selectFavoritePlaces = ({bookmarks}: RootState) => bookmarks.favoritePlaces;