import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@store/index';

export const selectActiveToolbarItem = ({ application }: RootState) => application.activeToolbarItem;
export const selectTypeFilter = ({ application }: RootState) => application.typeFilter;
export const selectNameFilter = ({ application }: RootState) => application.nameFilter;
export const selectUser = ({ application: { user } }: RootState) => user;
export const selectCurrentPlaceId = ({ application }: RootState) => application.currentPlaceId;
export const selectCurrentPlace = ({ application: { currentPlace, error, loading } }: RootState) => ({
    place: currentPlace,
    loading,
    error,
});

export const selectPlaceInfo = createSelector(
    [
        selectCurrentPlaceId,
        selectCurrentPlace,
    ],
    (currentPlaceId, placeInfoQuery) => ({ id: currentPlaceId, placeInfoQuery }),
);

export const selectToggleInfo = createSelector(
    [
        selectCurrentPlaceId,
        selectCurrentPlace,
    ],
    (id, { place }) => ({ id, saved: place?.saved }),
);
