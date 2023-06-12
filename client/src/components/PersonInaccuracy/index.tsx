import {Circle} from '@pbe/react-yandex-maps';
import React, {FC} from 'react';

interface Props {
    geometry: [number, number];
    accuracy: number;
}

export const PersonInaccuracy: FC<Props> = ({geometry, accuracy}) => {
    return <Circle
        geometry={[geometry, accuracy]}
        options={{
            fillColor: '#5e7bc7',
            fillOpacity: 0.2,
            strokeWidth: 0,
            cursor: 'drag',
        }}
    />;
};