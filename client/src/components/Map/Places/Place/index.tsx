import React, {FC} from 'react';
import {Placemark} from '@pbe/react-yandex-maps';
import mark from '@images/sight-icons/avocation.svg';

interface Props {
    geometry: [number, number],
    tags: any,
}

export const Place: FC<Props> = ({geometry, tags}) => {
    return <Placemark
        options={{
            iconLayout: 'default#image',
            iconImageHref: mark,
            iconImageSize: [16, 16],
        }}
        geometry={geometry}
        onClick={() => alert(JSON.stringify(tags, null, 2))}
    />;
};