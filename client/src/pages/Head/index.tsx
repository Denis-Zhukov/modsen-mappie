import React, { useEffect, useRef } from 'react';

import { AuthService } from '@api/AuthService';
import { Controls } from '@components/Controls';
import { Map } from '@components/Map';
import { MapContext } from '@context/MapContext';
import { useActions } from '@hooks';
import {getAccessToken} from '@utils/localStorage';

import s from './style.module.scss';

export function Head() {
    const { setMapSettings, setUser } = useActions();
    const mapRef = useRef<ymaps.Map>();
    const routeRef = useRef<ymaps.multiRouter.MultiRoute>();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const lat = +params.get('lat')! || 0;
        const lon = +params.get('lon')! || 0;
        const zoom = +params.get('zoom')! || 5;
        setMapSettings({ center: [lat, lon], zoom });

        if (getAccessToken()) {
            AuthService.checkAuth(localStorage.getItem('access_token')!)
                .then((user) => {
                    setUser({
                        user: {
                            id: user.id,
                            picture: user.picture,
                            access: localStorage.getItem('access_token')!,
                        },
                    });
                });
        }
    }, [setMapSettings, setUser]);

    return (
        <MapContext.Provider value={{ mapRef, routeRef }}>
            <div className={s.container}>
                <Controls />
                <Map />
            </div>
        </MapContext.Provider>
    );
}
