import React, {FC} from 'react';

import adult from '@images/sight-icons/18+.svg';
import architecture from '@images/sight-icons/architecture.svg';
import avocation from '@images/sight-icons/avocation.svg';
import bank from '@images/sight-icons/bank.svg';
import cafe from '@images/sight-icons/cafe.svg';
import culture from '@images/sight-icons/culture.svg';
import history from '@images/sight-icons/history.svg';
import hostels from '@images/sight-icons/hostels.svg';
import industrial from '@images/sight-icons/industry.svg';
import natural from '@images/sight-icons/nature.svg';
import religion from '@images/sight-icons/religion.svg';
import sport from '@images/sight-icons/sport-basketball.svg';
import {Placemark} from '@pbe/react-yandex-maps';

interface Props {
    type: string,
    geometry: [number, number],
    tags: any,
}

const icons: { [key: string]: string } = {
    'nature': natural,
    culture,
    'historic': history,
    religion,
    architecture,
    industrial,
    avocation,
    sport,
    adult,
    cafe,
    bank,
    'sleep': hostels,
};

export const Place: FC<Props> = ({geometry, tags, type}) => (<Placemark
    options={{
        iconLayout: 'default#image',
        iconImageHref: icons[type],
        iconImageSize: [16, 16],
        iconImageOffset: [-8, -8],
    }}
    geometry={geometry}
    onClick={() => alert(JSON.stringify({...tags, type}, null, 2))}
/>);
