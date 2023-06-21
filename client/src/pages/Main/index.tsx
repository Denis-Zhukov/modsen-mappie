import React, {createContext, useEffect, useRef, useState} from 'react';

import {Controls} from '@components/Controls';
import {Map} from '@components/Map';
import {useActions} from '@hooks';

import {AuthService} from '../../api/AuthService';

import s from './style.module.scss';

export const MapContext = createContext<{ map: any, setMap: any, routeRef: any }>({
    map: null,
    setMap: null,
    routeRef: null,
});

export const Main = () => {
    const {setMapSettings, setUser} = useActions();
    const [map, setMap] = useState(null);
    const routeRef = useRef(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const lat = +params.get('lat')! || 0;
        const lon = +params.get('lon')! || 0;
        const zoom = +params.get('zoom')! || 5;
        setMapSettings({center: [lat, lon], zoom});

        if (localStorage.getItem('access_token'))
            AuthService.checkAuth(localStorage.getItem('access_token')!)
                .then(user => {
                    setUser({
                        user: {
                            id: user.id,
                            picture: user.picture,
                            access: localStorage.getItem('access_token')!,
                        },
                    });
                });
    }, [setMapSettings, setUser]);


    return (
        <MapContext.Provider value={{map, setMap, routeRef}}>
            <div className={s.container}>
                <Controls/>
                <Map className={s.map}/>
            </div>
        </MapContext.Provider>
    );
};


