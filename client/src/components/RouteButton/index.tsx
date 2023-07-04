import React, {
    useCallback, useContext, useEffect, useState,
} from 'react';

import {MapContext} from '@context/MapContext';
import {useAppSelector} from '@hooks';
import LocationIcon from '@mui/icons-material/LocationOn';
import {Button} from '@mui/material';
import {useYMaps} from '@pbe/react-yandex-maps';
import {selectCurrentPlace} from '@store/selectors/application';
import {selectPersonCoords} from '@store/selectors/geolocation';
import {shallowEqual} from 'react-redux';

export function RouteButton() {
    const [lat, lon] = useAppSelector(selectPersonCoords);
    const {place} = useAppSelector(selectCurrentPlace);

    const {mapRef, routeRef} = useContext(MapContext);
    const ymaps = useYMaps(['multiRouter.MultiRoute']);

    const [current, setCurrent] = useState(false);

    useEffect(() => {
        if (routeRef && routeRef.current && place) {
            const destination = routeRef.current.model.getReferencePoints()[1];
            if (shallowEqual(destination, place.position)) setCurrent(true);
        }
    }, [routeRef, place]);

    const handleRoute = useCallback(() => {
        if (!routeRef || !mapRef || !ymaps || !mapRef || !mapRef.current || !place) return;

        if (routeRef.current && place) {
            mapRef.current.geoObjects.remove(routeRef.current);
            const destination = routeRef.current?.model.getReferencePoints()[1];
            routeRef.current = undefined;
            if (shallowEqual(destination, place.position)) return setCurrent(false);
        }

        const start = [lat, lon] as [number, number];
        const destination = place.position;

        routeRef.current = new ymaps.multiRouter.MultiRoute(
            {
                referencePoints: [start, destination],
                params: {routingMode: 'pedestrian'},
            },
            {boundsAutoApply: true, wayPointVisible: false},
        );

        setCurrent(true);
        mapRef.current.geoObjects.add(routeRef.current);
    }, [lat, lon, mapRef, routeRef, place, ymaps]);

    return (
        <Button variant="contained" startIcon={<LocationIcon/>} onClick={handleRoute}>
            {current ? 'Убрать' : 'Маршрут'}
        </Button>
    );
}
