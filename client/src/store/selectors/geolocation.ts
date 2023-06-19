import {createSelector} from '@reduxjs/toolkit';

import type {RootState} from '@store/index';
import type {IPlace} from '@typing/interfaces';

export const selectMapSettings = ({geolocation: {center, zoom}}: RootState) => ({center, zoom});
export const selectPersonCoords = ({geolocation: {personCoords: [lat, lon]}}: RootState) => [lat, lon] as [number, number] | [null, null];
export const selectGeoInaccuracy = ({geolocation: {geoAccuracy}}: RootState) => geoAccuracy;

export const selectPersonAndGeoInaccuracy = createSelector(
    [
        selectPersonCoords,
        selectGeoInaccuracy,
    ],
    (coords, inaccuracy) => {
        return {coords, inaccuracy};
    },
);


export const selectRadius = ({geolocation: {radius}}: RootState) => radius;
export const selectPlaces = createSelector(
    [
        ({geolocation}: RootState) => geolocation.places,
        ({geolocation}: RootState) => geolocation.error,
        ({application}: RootState) => application.filter,
    ],
    (places, error, filter) => {
        return [places.filter(p => filter.includes(p.type)), error] as [IPlace[], any];
    },
);
