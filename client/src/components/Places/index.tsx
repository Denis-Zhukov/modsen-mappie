import React from 'react';

import {Place} from '@components/Place';

import type {IPlace} from '@typing/interfaces';

interface Props {
    places: Omit<IPlace, 'tags'>[]
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
