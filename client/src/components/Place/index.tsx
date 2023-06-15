import React, {FC} from 'react';

import {Placemark} from '@pbe/react-yandex-maps';

import {icons} from '../../contants/icons';

interface Props {
    type: string,
    geometry: [number, number],
    tags: any,
}

export const Place: FC<Props> = ({geometry, tags, type}) => (<Placemark
    options={{
        iconLayout: 'default#image',
        iconImageHref: icons[type].src,
        iconImageSize: [16, 16],
        iconImageOffset: [-8, -8],
    }}
    geometry={geometry}
    onClick={() => alert(JSON.stringify({...tags, type}, null, 2))}
/>);
