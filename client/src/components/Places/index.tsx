import React, {FC} from 'react';

import {Place} from '@components/Place';

import type {IPlace} from '@typing/interfaces';

interface Props {
    places: Omit<IPlace, 'tags'>[]
}

export const Places: FC<Props> = React.memo(({places}) => (<>
    {places.map((place) => <Place key={place.id} id={place.id} geometry={place.position} type={place.type}/>)}
</>), ({places: prevPlaces}, {places: nextPlaces}) => {
    return nextPlaces.length === prevPlaces.length &&
        nextPlaces.every(
            ({id: nextId}) => prevPlaces.find(
                ({id: prevId}) => prevId === nextId),
        );
});