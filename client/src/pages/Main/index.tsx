import React, {useEffect} from 'react';

import {Controls} from '@components/Controls';
import {Map} from '@components/Map';
import {useActions} from '@hooks';

import s from './style.module.scss';


export const Main = () => {
    const {setMapSettings} = useActions();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const lat = +params.get('lat')! || 0;
        const lon = +params.get('lon')! || 0;
        const zoom = +params.get('zoom')! || 5;
        setMapSettings({center: [lat, lon], zoom});
    }, [setMapSettings]);

    return (
        <div className={s.container}>
            <Controls/>
            <Map className={s.map}/>
        </div>
    );
};


