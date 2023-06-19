import React from 'react';

import {ToolbarItem} from '@components/ToolbarItem';
import {toolbarItems} from '@constants/toolbarItems';
import {Box, Paper, Stack} from '@mui/material';

import s from './style.module.scss';


export const Toolbar = React.memo(() => (
    <Paper className={s.wrapper}>
        <Stack direction="column" className={s.toolbar} alignItems="center" spacing={2}>
            <Box
                component="img"
                alt="Your logo."
                src="logo512.png"
                className={s.logo}
            />

            {toolbarItems.map((item, i) => <ToolbarItem key={i} type={item.type}>{item.component}</ToolbarItem>)}

            <Box
                style={{marginTop: 'auto'}}
                component="img"
                alt="Avatar"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"
                className={s.avatar}
            />
        </Stack>
    </Paper>
));