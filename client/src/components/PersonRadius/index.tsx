import React from 'react';

import {useAppSelector} from '@hooks';
import {Circle} from '@pbe/react-yandex-maps';

export const PersonRadius = () => {
    const [latitude, longitude] = useAppSelector(state => [state.person.latitude, state.person.longitude]);
    const radius = useAppSelector(state => state.person.radius);

    return <Circle
        geometry={[[latitude, longitude], radius]}
        options={{
            fillColor: '#5E7BC7',
            fillOpacity: 0.1,
            strokeColor: '#5E7BC7',
            strokeWidth: 3,
            strokeOpacity: 0.2,
            strokeStyle: 'dash',
            cursor: 'drag',
        }}
    />;
};