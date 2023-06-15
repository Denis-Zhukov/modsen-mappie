import React from 'react';

import {Place} from '@components/Place';
import {useAppSelector} from '@hooks';
import {useGetPlacesQuery} from '@store/quries/places.api';

export const Places = () => {
    const geometry = useAppSelector(state =>
        [state.person.latitude, state.person.longitude]) as [number | null, number | null];
    const radius = useAppSelector(state => state.person.radius);

    const {data, isSuccess} = useGetPlacesQuery({geometry, radius});

    if (isSuccess)
        return <>
            {
                data.map((p: any) => {
                    return (
                        <Place key={p.id} geometry={p.position} tags={p.tags} type={p.type}/>
                    );
                })
            }
        </>;

    return null;
};