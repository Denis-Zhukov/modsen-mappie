import {Map as YMap, ZoomControl, Placemark} from '@pbe/react-yandex-maps';
import React, {FC, useCallback, useEffect} from 'react';
import {PersonMarker} from '@components/Map/PersonMarker';
import {PersonInaccuracy} from '@components/Map/PersonInaccuracy';
import {CenterControl} from '@components/Map/CenterControl';
import {useActions, useAppSelector, useSetQueryParams} from '@hooks';
import {useSearchParams} from 'react-router-dom';
import icon from '@images/sight-icons/avocation.svg';


interface Props {
    className?: string;
    defaultLon?: number;
    defaultLat?: number;
    defaultZoom?: number;
}


export const Map: FC<Props> = (
    {
        className,
        defaultLon = 0,
        defaultLat = 0,
        defaultZoom = 10,
    },
) => {
    const [searchParams] = useSearchParams();

    const setParams = useSetQueryParams();

    // const {data} = useGetPlacesQuery({geometry: MAP.center, radius: 500});
    // const places: any[] = data?.elements ?? [];
    const places: any[] = [];

    const {setMapSettings} = useActions();
    const mapSettings = useAppSelector(state => state.map);

    useEffect(() => {
        const lon = parseFloat(searchParams.get('lon')!) || defaultLon;
        const lat = parseFloat(searchParams.get('lat')!) || defaultLat;
        const zoom = parseFloat(searchParams.get('z')!) || defaultZoom;

        setMapSettings({center: [lon, lat], zoom});

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultLon, defaultLat, defaultZoom]);

    const handleBoundsChange = useCallback((event: ymaps.IEvent) => {
        const map = event.get('target');
        const [lon, lat] = map.getCenter();
        const z = map.getZoom();
        setParams({lon, lat, z});
        setMapSettings({center: [lon, lat], zoom: z});
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
            {
                places.map(p => (
                    <Placemark
                        key={p.id}
                        modules={['geoObject.addon.balloon']}
                        defaultGeometry={[p.lat, p.lon]}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: icon,
                            iconImageSize: [20, 20],
                            iconImageOffset: [-10, -10],
                        }}
                        onClick={() => alert(p.id + ' | ' + p.tags['name:ru'] ?? p.tags.name ?? 'Нет названия')}
                    />
                ))
            }

            {
                <>
                    <PersonMarker/>
                    <PersonInaccuracy/>
                </>
            }
        </YMap>
    );
};