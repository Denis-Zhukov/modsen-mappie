import {Circle} from '@pbe/react-yandex-maps';
import React, {FC} from 'react';
import {useGeoLocation} from '@hooks';

export const PersonInaccuracy: FC = () => {
    const {latitude, longitude, accuracy} = useGeoLocation(5000);

    return <Circle
        geometry={[[latitude, longitude], accuracy]}
        options={{
            fillColor: '#5e7bc7',
            fillOpacity: 0.2,
            strokeWidth: 0,
            cursor: 'drag',
        }}
    />;
};