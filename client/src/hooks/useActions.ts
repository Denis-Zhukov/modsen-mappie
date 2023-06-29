import { useMemo } from 'react';

import { bindActionCreators } from '@reduxjs/toolkit';
import { applicationActions } from '@store/slices/application';
import { getInfoAboutPlaceThunk } from '@store/slices/application/getInfoAboutPlaceThunk';
import { bookmarksActions } from '@store/slices/bookmarks';
import { getFavoritePlacesThunk } from '@store/slices/bookmarks/getFavoritePlacesThunk';
import { toggleFavoritePlaceThunk } from '@store/slices/bookmarks/toggleFavoritePlaceThunk';
import { geolocationActions } from '@store/slices/geolocation';
import { getPlacesThunk } from '@store/slices/geolocation/getPlacesThunk';

import { useAppDispatch } from './redux-toolkit';

const actions = {
    ...geolocationActions,
    ...applicationActions,
    ...bookmarksActions,
    getPlacesThunk,
    getInfoAboutPlaceThunk,
    toggleFavoritePlaceThunk,
    getFavoritePlacesThunk,
};

export const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
