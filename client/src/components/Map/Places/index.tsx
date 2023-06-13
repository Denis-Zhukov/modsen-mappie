import React from 'react';
import {useGetPlacesQuery} from '@store/quries/places.api';
import {useAppSelector} from '@hooks';
import {Place} from '@components/Map/Places/Place';

export const Places = () => {
    const screenCenter = useAppSelector(state => state.map.center);
    const {data} = useGetPlacesQuery({geometry: screenCenter, radius: 500});
    const places: any[] = data?.elements || [];

    return <>
        {
            places.map(p => (
                <Place key={p.id} geometry={[p.lat, p.lon]} tags={p.tags}/>
            ))
        }
    </>;
};