import React, {FC} from 'react';

import {icons} from '@constants/icons';
import {useActions} from '@hooks';
import {Placemark} from '@pbe/react-yandex-maps';

import type {TPlaceKind} from '@typing/types';


interface Props {
    id: number,
    type: TPlaceKind,
    geometry: [number, number],
}

export const Place: FC<Props> = React.memo(({id, geometry, type}) => {
    const {showPlaceInfo} = useActions();
    const handleClick = () => {
        showPlaceInfo({id});
    };

    return (
        <Placemark
            options={{
                iconLayout: 'default#image',
                iconImageHref: icons[type].src,
                iconImageSize: [16, 16],
                iconImageOffset: [-8, -8],
            }}
            geometry={geometry}
            onClick={handleClick}
        />
    );
}, ({geometry: prevGeometry}, {geometry: nextGeometry}) => {
    return prevGeometry[0] === nextGeometry[0] && prevGeometry[1] === nextGeometry[1];
});
