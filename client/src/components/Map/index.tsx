import {Circle, Map as YMap, Placemark, GeolocationControl, ZoomControl} from '@pbe/react-yandex-maps';
import React, {FC, useCallback, useRef, useState} from 'react';

import marker from '@images/person.png';

import {useGeoLocation} from '../../hooks';


interface Props {
    defaultSettings: ymaps.IMapState & {
        center: number[];
        zoom: number
    };
    className: string;
}

const defaultSize = 20 as const;

export const Map: FC<Props> = ({defaultSettings, className}) => {
    const [settings, setSettings] = useState<ymaps.IMapState>({
        center: defaultSettings.center,
    });

    const mapRef = useRef<ymaps.Map>();
    const {latitude, longitude, accuracy, error} = useGeoLocation();

    const getSizeMarker = () => {
        if (mapRef.current)
            return defaultSize / (mapRef.current.getZoom() / 15);
        return defaultSize;
    };

    const size = getSizeMarker();

    const handleCenter = useCallback(() => {
        if (latitude && longitude)
            setSettings({center: [latitude, longitude]});
    }, [latitude, longitude]);

    const handleMapBoundsChange = (event: any) => {
        const newBounds = event.get('newBounds');

        const southWest = newBounds[0];
        const northEast = newBounds[1];

        const distanceInKilometers = calculateDistance(
            southWest[0],
            southWest[1],
            northEast[0],
            northEast[1],
        );

        console.log('Distance in kilometers:', distanceInKilometers);
    };

    const calculateDistance = (lat1: any, lon1: any, lat2: any, lon2: any) => {
        const earthRadius = 6371; // in kilometers
        const dLat = degToRad(lat2 - lat1);
        const dLon = degToRad(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(degToRad(lat1)) *
            Math.cos(degToRad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadius * c;

        return distance;
    };

    const degToRad = (degrees: any) => {
        return (degrees * Math.PI) / 180;
    };

    return (
        <YMap
            defaultState={{...defaultSettings, controls: []}}
            state={{...settings, zoom: 13}}

            instanceRef={mapRef}
            onBoundsChange={handleMapBoundsChange}

            options={{
                suppressMapOpenBlock: true,
                copyrightLogoVisible: false,
                copyrightProvidersVisible: false,
                copyrightUaVisible: false,
            }}

            className={className}
        >
            <GeolocationControl options={{
                position: {
                    bottom: '1rem',
                    right: '3rem',
                },
            }} onClick={handleCenter}/>
            <ZoomControl options={{
                position: {
                    bottom: '1rem',
                    right: '1rem',
                },
                size: 'small',
            }}/>

            {
                latitude && longitude && <>
                    <Placemark
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: marker,
                            iconImageSize: [size, size],
                            iconImageOffset: [-(size / 2), -(size / 1.5)],
                        }}
                        geometry={[latitude ?? defaultSettings.center[0], longitude ?? defaultSettings.center[1]]}
                    />
                    <Circle
                        geometry={[[latitude, longitude], accuracy]}
                        options={{
                            fillColor: '#46458C',
                            fillOpacity: 0.6,

                            strokeColor: '#46458C',
                            strokeWidth: 2,

                            cursor: 'drag',
                        }}
                    />
                </>
            }
        </YMap>
    );
};