import React, {FC} from 'react';

import {icons} from '@constants/icons';
import {Placemark} from '@pbe/react-yandex-maps';

import type {TPlaceKind} from '@typing/types';


interface Props {
    type: TPlaceKind,
    geometry: [number, number],
    tags: { [key: string]: string },
}

export const Place: FC<Props> = React.memo(({geometry, tags, type}) => {
    return (
        <Placemark
            options={{
                iconLayout: 'default#image',
                iconImageHref: icons[type].src,
                iconImageSize: [16, 16],
                iconImageOffset: [-8, -8],
            }}
            geometry={geometry}
            onClick={() => alert(JSON.stringify({...tags, type}, null, 2))}
        />
    );
}, () => true);
