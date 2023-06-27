import {createSelector} from '@reduxjs/toolkit';
import {selectNameFilter, selectTypeFilter} from '@store/selectors/application';

import type {RootState} from '@store/index';

export const selectMapSettings = ({geolocation: {center, zoom}}: RootState) => ({center, zoom});
export const selectPersonCoords = ({geolocation: {personCoords: [lat, lon]}}: RootState) => [lat, lon] as [number, number] | [null, null];
export const selectGeoInaccuracy = ({geolocation: {geoAccuracy}}: RootState) => geoAccuracy;
export const selectRadius = ({geolocation: {radius}}: RootState) => radius;
export const selectPersonAndGeoInaccuracy = createSelector(
    [
        selectPersonCoords,
        selectGeoInaccuracy,
    ],
    (coords, inaccuracy) => ({coords, inaccuracy}),
);

export const selectAllPlaces = ({geolocation: {places, error, loading}}: RootState) => ({
    places, loading, error,
});
export const selectPlaces = createSelector(
    [
        selectAllPlaces,
        selectTypeFilter,
        selectNameFilter,
    ],
    (query, types, nameFilter) => {
        const filterNameRegex = new RegExp(nameFilter, 'i');
        return {
            ...query,
            places: query.places.filter(({type, name}) => (types.includes(type)) && filterNameRegex.test(name)),
        };
    },
);
