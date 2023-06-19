import React from 'react';

import {useAppSelector} from '@hooks';
import {Circle} from '@pbe/react-yandex-maps';
import {selectPersonAndGeoInaccuracy} from '@store/selectors/geolocation';

export const PersonInaccuracy = () => {
    const {coords, inaccuracy} = useAppSelector(selectPersonAndGeoInaccuracy);

    return <Circle
        geometry={[coords, inaccuracy]}
        options={{
            fillColor: '#5e7bc7',
            fillOpacity: 0.2,
            strokeWidth: 0,
            cursor: 'drag',
        }}
    />;
};