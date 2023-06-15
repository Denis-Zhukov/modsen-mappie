import React, {useEffect, useState} from 'react';

import {Map} from '@components/Map';
import {SearchPanel} from '@components/SearchPanel';
import {SidePanel} from '@components/SidePanel';
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
        const zoom = +searchParams.get('z')! || 0;

        setMapSettings({center: [lat, lon], zoom});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [active, setActive] = useState(true);

    return (
        <div className={s.container}>
            <div className={s.controls}>
                <Toolbar/>
                {active && <SidePanel><SearchPanel/></SidePanel>}
            </div>
            <Map className={s.map}/>
        </div>
    );
};

