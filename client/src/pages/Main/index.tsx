import React, {useEffect} from 'react';
import {Map} from '@components/Map';
import {Toolbar} from '@components/Toolbar';
import {useActions} from '@hooks';
import {useSearchParams} from 'react-router-dom';
import s from './style.module.scss';

export const Main = () => {
    const {setMapSettings} = useActions();
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const lat = +searchParams.get('lat')! || 0;
        const lon = +searchParams.get('lon')! || 0;
        const zoom = +searchParams.get('z')! || 5;

        setMapSettings({center: [lat, lon], zoom});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={s.container}>
            <Map className={s.map}/>
            <div className={s.controls}>
                <Toolbar/>
            </div>
        </div>
    );
};

