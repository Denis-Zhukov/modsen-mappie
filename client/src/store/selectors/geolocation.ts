import {createSelector} from '@reduxjs/toolkit';

import type {RootState} from '@store/index';
import type {IPlace} from '@typing/interfaces';
import type {TPlaceKind} from '@typing/types';

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
        ({application}: RootState) => [application.typeFilter, application.nameFilter] as [TPlaceKind[], string],
    ],
    (places, error, [types, nameFilter]) => {
        const filterNameRegex = new RegExp(nameFilter, 'i');
        return [
            places.filter(({type, name}) => (types.includes(type)) && filterNameRegex.test(name)),
            error,
        ] as [Omit<IPlace, 'tags'>[], any];
    },
);
