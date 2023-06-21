import React, {useContext, useEffect} from 'react';

import {useAppSelector} from '@hooks';
import LocationIcon from '@mui/icons-material/LocationOn';
import {Button} from '@mui/material';
import {MapContext} from '@pages/Main';
import {useYMaps} from '@pbe/react-yandex-maps';
import {selectCurrentPlace} from '@store/selectors/application';
import {selectPersonCoords} from '@store/selectors/geolocation';

export const RouteButton = () => {
    const [lat, lon] = useAppSelector(selectPersonCoords);
    const place = useAppSelector(selectCurrentPlace);

    const {map, routeRef} = useContext(MapContext);
    const ymaps = useYMaps(['multiRouter.MultiRoute']);
    const handleRoute = () => {
        if (routeRef.current) {
            map.current.geoObjects.remove(routeRef.current);
            routeRef.current = null;
        }

        const pointA = [lat!, lon!];
        const pointB = place!.position;

        routeRef.current = new ymaps!.multiRouter.MultiRoute(
            {
                referencePoints: [pointA, pointB],
                params: {routingMode: 'pedestrian'},
            },
            {boundsAutoApply: true},
        );
        map.current.geoObjects.add(routeRef.current);
    };

    return <Button variant="contained" startIcon={<LocationIcon/>} onClick={handleRoute}>
        Маршрут
    </Button>;
};