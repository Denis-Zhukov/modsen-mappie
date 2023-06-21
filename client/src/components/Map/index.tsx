import React, {FC, useCallback, useContext, useEffect, useRef} from 'react';

import {MapBody} from '@components/MapBody';
import {useActions, useAppSelector} from '@hooks';
import {MapContext} from '@pages/Main';
import {Map as YMap} from '@pbe/react-yandex-maps';
import {selectMapSettings} from '@store/selectors/geolocation';
import {useSearchParams} from 'react-router-dom';


interface Props {
    className?: string;
}

export const Map: FC<Props> = (props) => {
    const {setMap} = useContext(MapContext);
    const {setMapSettings} = useActions();
    const mapSettings = useAppSelector(selectMapSettings);
    const [, setSearchParams] = useSearchParams();

    const mapRef = useRef<ymaps.Map>();

    useEffect(() => {
        const timer = setTimeout(
            () => setSearchParams({
                lat: '' + mapSettings.center[0],
                lon: '' + mapSettings.center[1],
                zoom: '' + mapSettings.zoom,
            }, {replace: true}), 750);
        return () => clearTimeout(timer);
    }, [mapSettings, setSearchParams]);

    useEffect(() => {
        setMap(mapRef);
    }, [setMap]);

    const handleBoundsChange = useCallback((event: ymaps.IEvent) => {
        const map = event.get('target');
        const [lat, lon] = map.getCenter();
        const zoom = map.getZoom();
        setMapSettings({center: [lat, lon], zoom});
    }, [setMapSettings]);


    useEffect(() => {
    }, []);

    return (<YMap
        state={mapSettings}
        options={{
            suppressMapOpenBlock: true,
            copyrightLogoVisible: false,
            copyrightProvidersVisible: false,
            copyrightUaVisible: false,
        }}
        className={props.className}
        onBoundsChange={handleBoundsChange}
        instanceRef={mapRef}
    >
        <MapBody/>
    </YMap>);
};