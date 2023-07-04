import React from 'react';

import { PersonArea } from '@components/PersonArea';
import { ZoomControl } from '@pbe/react-yandex-maps';

import { CenterControl } from './CenterControl';

export const MapBody = React.memo(() => (
    <>
        <ZoomControl options={{
            position: {
                bottom: '16px',
                right: '16px',
            },
            size: 'small',
        }}
        />
        <CenterControl />
        <PersonArea />
    </>
));
