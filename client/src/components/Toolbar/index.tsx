import {Box, Paper, Stack, IconButton} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SearchIcon from '@mui/icons-material/Search';

import s from './style.module.scss';


export const Toolbar = () => {

    return (
        <Paper className={s.wrapper}>
            <Stack direction="column" className={s.toolbar} alignItems="center" spacing={2}>

                <Box
                    component="img"
                    alt="Your logo."
                    src="logo512.png"
                    className={s.logo}
                />

                <IconButton className={`${s.searchBtn} ${s.btn} ${s.searchActive}`}>
                    <SearchIcon/>
                </IconButton>
                <IconButton className={`${s.bookmarkBtn} ${s.btn}`}>
                    <BookmarkIcon/>
                </IconButton>

                <Box
                    justifySelf="center"
                    component="img"
                    alt="Avatar"
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"
                    className={s.avatar}
                />
            </Stack>
        </Paper>

    );
};