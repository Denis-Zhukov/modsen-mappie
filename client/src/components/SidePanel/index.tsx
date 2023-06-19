import React from 'react';
import type {ReactNode} from 'react';

import s from './style.module.scss';


interface Props {
    children: string | ReactNode | ReactNode[]
}

export const SidePanel: React.FC<Props> = ({children}) => {
    return <div className={s.sidePanel}>{children}</div>;
};