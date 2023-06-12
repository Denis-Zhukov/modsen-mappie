import {
    Map as YMap,
    GeolocationControl,
    ZoomControl,
} from '@pbe/react-yandex-maps';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {PersonMarker} from '@components/PersonMarker';
import {PersonInaccuracy} from '@components/PersonInaccuracy';
import {useGeoLocation} from '../../hooks';
import {useMarkerRotation} from '../../hooks/useMarkerRotation';


interface Props {
    defaultSettings: ymaps.IMapState & {
        center: number[];
        zoom: number
    };
    className: string;
}


export const Map: FC<Props> = ({defaultSettings, className}) => {
    const [settings, setSettings] = useState<ymaps.IMapState>({
        center: defaultSettings.center,
        zoom: defaultSettings.zoom,
    });

    const {
        latitude,
        longitude,
        accuracy,
        error,
    } = useGeoLocation(5000);

    const rotation = useMarkerRotation();
    console.log(rotation);

    useEffect(() => {
        if (error) alert(error);
    }, [error]);

    const handleCenter = useCallback(() => {
        if (latitude && longitude) setSettings({center: [latitude, longitude], zoom: 15});
    }, [latitude, longitude]);

    return (
        <YMap
            state={{...settings, zoom: settings.zoom || defaultSettings.zoom}}
            options={{
                suppressMapOpenBlock: true,
                copyrightLogoVisible: false,
                copyrightProvidersVisible: false,
                copyrightUaVisible: false,
            }}
            className={className}
        >
            <GeolocationControl
                options={{
                    position: {
                        bottom: '1rem',
                        right: '3rem',
                    },
                    //@ts-ignore
                    noPlacemark: true,
                }}
                onClick={handleCenter}
            />
            <ZoomControl options={{
                position: {
                    bottom: '1rem',
                    right: '1rem',
                },
                size: 'small',
            }}

            />

            {
                latitude && longitude && <>
                    <PersonMarker geometry={[latitude, longitude]} heading={rotation || 0}/>
                    <PersonInaccuracy geometry={[latitude, longitude]} accuracy={accuracy || 1}/>
                </>
            }
        </YMap>
    );
};