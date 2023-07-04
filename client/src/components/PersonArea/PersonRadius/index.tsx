import React from 'react';

import {Colors} from '@constants/Colors';
import {useAppSelector} from '@hooks';
import {Circle} from '@pbe/react-yandex-maps';
import {selectPersonCoords, selectRadius} from '@store/selectors/geolocation';

export function PersonRadius() {
    const [latitude, longitude] = useAppSelector(selectPersonCoords);
    const radius = useAppSelector(selectRadius);

    if (!latitude || !longitude) return null;

    return (
        <Circle
            geometry={[[latitude, longitude], radius]}
            options={{
                fillColor: Colors.Blue,
                fillOpacity: 0.1,
                strokeColor: '#5E7BC7',
                strokeWidth: 3,
                strokeOpacity: 0.2,
                strokeStyle: 'dash',
                cursor: 'drag',
            }}
        />
    );
}
