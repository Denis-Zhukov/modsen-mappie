import React, {FC} from 'react';

import {Place} from '@components/Place';

import type {IPlace} from '@typing/interfaces';

interface Props {
    items: IPlace[]
}

export const Places: FC<Props> = React.memo(({items}) => (<>
    {items.map(p => <Place key={p.id} id={p.id} geometry={p.position} type={p.type}/>)}
</>), ({items: prevPlaces}, {items: nextPlaces}) => {
    return nextPlaces.length === prevPlaces.length &&
        nextPlaces.every(({id: nextId}) => prevPlaces.find(({id: prevId}) => prevId === nextId));
});