import React, {useCallback, useContext, useEffect} from 'react';

import {MapBody} from '@components/Map/MapBody';
import {MapContext} from '@context/MapContext';
import {useActions, useAppSelector} from '@hooks';
import {Map as YMap} from '@pbe/react-yandex-maps';
import {selectMapSettings} from '@store/selectors/geolocation';
import {useSearchParams} from 'react-router-dom';

import styles from './style.module.scss';

export function Map() {
    const {mapRef} = useContext(MapContext);
    const {setMapSettings} = useActions();
    const mapSettings = useAppSelector(selectMapSettings);
    const [_, setSearchParams] = useSearchParams();

    useEffect(() => {
        const timer = setTimeout(() => setSearchParams({
            lat: `${mapSettings.center[0]}`,
            lon: `${mapSettings.center[1]}`,
            zoom: `${mapSettings.zoom}`,
        }, {replace: true}), 750);
        return () => clearTimeout(timer);
    }, [mapSettings, setSearchParams]);

    const handleBoundsChange = useCallback((event: ymaps.IEvent) => {
        const map = event.get('target');
        const [lat, lon] = map.getCenter();
        const zoom = map.getZoom();
        setMapSettings({center: [lat, lon], zoom});
    }, []);

    return (
        <YMap
            state={mapSettings}
            options={{
                suppressMapOpenBlock: true,
                copyrightLogoVisible: false,
                copyrightProvidersVisible: false,
                copyrightUaVisible: false,
            }}
            className={styles.map}
            onBoundsChange={handleBoundsChange}
            instanceRef={mapRef!}
        >
            <MapBody/>
        </YMap>
    );
}
