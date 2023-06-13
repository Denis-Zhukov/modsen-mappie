import React, {FC, useCallback} from 'react';
import {Map as YMap, ZoomControl} from '@pbe/react-yandex-maps';
import {PersonMarker} from '@components/Map/PersonMarker';
import {PersonInaccuracy} from '@components/Map/PersonInaccuracy';
import {CenterControl} from '@components/Map/CenterControl';
import {useActions, useAppSelector, useSetQueryParams} from '@hooks';
import {Places} from '@components/Map/Places';


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
        setParams({lon, lat, z});
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
        </YMap>
    );
};