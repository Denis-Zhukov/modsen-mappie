import React from 'react';
import type {ReactNode} from 'react';

import {Paper, Stack} from '@mui/material';

import s from './style.module.scss';



interface Props {
    children: string | ReactNode | ReactNode[]
}

export const SidePanel: React.FC<Props> = ({children}) => {
    return <Paper className={s.sidePanel}>
        <Stack spacing={2}>
            {children}
        </Stack>
    </Paper>;
};