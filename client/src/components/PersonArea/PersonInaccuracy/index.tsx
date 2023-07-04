import React from 'react';

import {Colors} from '@constants/Colors';
import { useAppSelector } from '@hooks';
import { Circle } from '@pbe/react-yandex-maps';
import { selectPersonAndGeoInaccuracy } from '@store/selectors/geolocation';

export function PersonInaccuracy() {
    const { coords, inaccuracy } = useAppSelector(selectPersonAndGeoInaccuracy);

    return (
        <Circle
            geometry={[coords, inaccuracy]}
            options={{
                fillColor: Colors.Blue,
                fillOpacity: 0.2,
                strokeWidth: 0,
                cursor: 'drag',
            }}
        />
    );
}
