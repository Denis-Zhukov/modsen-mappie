import React from 'react';

import {CenterControl} from '@components/CenterControl';
import {PersonArea} from '@components/PersonArea';
import {ZoomControl} from '@pbe/react-yandex-maps';

export const MapBody = React.memo(() => <>
    <ZoomControl options={{
        position: {
            bottom: '1rem',
            right: '1rem',
        },
        size: 'small',
    }}/>
    <CenterControl/>
    <PersonArea/>
</>);