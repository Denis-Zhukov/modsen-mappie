import React from 'react';

import {Map} from '@components/Map';

import {Toolbar} from '@components/Toolbar';

import s from './style.module.scss';

const def = {
    center: [52.03190, 29.20204],
    zoom: 16,
};

export const Main = () => {


    return (
        <div className={s.container}>
            <Map defaultSettings={def} className={s.map}/>
            <div className={s.controls}>
                <Toolbar/>
            </div>
        </div>
    );
};

