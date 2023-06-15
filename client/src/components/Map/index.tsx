import React, {FC, useCallback} from 'react';

import {CenterControl} from '@components/CenterControl';
import {PersonInaccuracy} from '@components/PersonInaccuracy';
import {PersonMarker} from '@components/PersonMarker';
import {PersonRadius} from '@components/PersonRadius';
import {Places} from '@components/Places';
import {useActions, useAppSelector, useSetQueryParams} from '@hooks';
import {Map as YMap, ZoomControl} from '@pbe/react-yandex-maps';


interface Props {
    className?: string;
}

export const Map: FC<Props> = ({className}) => {
    const setParams = useSetQueryParams();

    const mapSettings = useAppSelector(state => state.map);
    const {setMapSettings} = useActions();

    const handleBoundsChange = useCallback((event: ymaps.IEvent) => {
        const map = event.get('target');
        const [lat, lon] = map.getCenter();
        const z = map.getZoom();
        setParams({lat, lon, z});
        setMapSettings({center: [lat, lon], zoom: z});
    }, [setParams, setMapSettings]);

    return (
        <YMap
            state={mapSettings}
            options={{
                suppressMapOpenBlock: true,
                copyrightLogoVisible: false,
                copyrightProvidersVisible: false,
                copyrightUaVisible: false,

            }}
            className={className}
            onBoundsChange={handleBoundsChange}
        >
            <CenterControl/>
            <ZoomControl options={{
                position: {
                    bottom: '1rem',
                    right: '1rem',
                },
                size: 'small',
            }}
            />
            <Places/>
            <PersonMarker/>
            <PersonInaccuracy/>
            <PersonRadius/>
        </YMap>
    );
};