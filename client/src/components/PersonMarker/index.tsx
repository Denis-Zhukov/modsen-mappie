import {Placemark, useYMaps} from '@pbe/react-yandex-maps';
import React, {FC} from 'react';
import marker from '@images/person.svg';
import s from './style.module.scss';

interface Props {
    geometry: [number, number];
    heading: number;
}

export const PersonMarker: FC<Props> = ({geometry, heading}) => {
    const ymaps = useYMaps(['templateLayoutFactory']);
    if (!ymaps?.templateLayoutFactory) return null;

    const template = ymaps.templateLayoutFactory.createClass(`
        <img 
            src="${marker}" 
            alt="Me" 
            class=${s.marker}
            style="transform: rotate(${Math.trunc(heading)}deg);"
        />`,
    );

    return <Placemark
        options={{iconLayout: template}}
        geometry={geometry}
    />;
};