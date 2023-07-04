import React from 'react';

import {Place} from './Place';

import type {IPlaceWithoutDescription} from '@typing/interfaces';

interface Props {
    places: IPlaceWithoutDescription[]
}

function checkEqualsPlaces({places: prevPlaces}: Readonly<Props>, {places: nextPlaces}: Readonly<Props>) {
    return nextPlaces.length === prevPlaces.length
        && nextPlaces.every(
            ({id: nextId}) => prevPlaces.find(
                ({id: prevId}) => prevId === nextId));
}

export const Places = React.memo<Props>(({places}: Props) => (
    <>
        {places.map((place) => <Place key={place.id} id={place.id} geometry={place.position} type={place.type}/>)}
    </>),
checkEqualsPlaces,
);
