import React from 'react';

import s from './style.module.scss';


interface Props {
    children: string | JSX.Element | JSX.Element[]
}

export const SidePanel: React.FC<Props> = ({children}) => {

    return <div className={s.sidePanel}>{children}</div>;
}