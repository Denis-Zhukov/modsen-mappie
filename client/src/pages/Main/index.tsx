import React from 'react';
import {Map} from '@components/Map';
import {Toolbar} from '@components/Toolbar';
import s from './style.module.scss';

export const Main = () => {
    return (
        <div className={s.container}>
            <Map className={s.map}/>
            <div className={s.controls}>
                <Toolbar/>
            </div>
        </div>
    );
};

