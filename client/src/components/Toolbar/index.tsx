import {useActions, useAppSelector} from '@hooks';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SearchIcon from '@mui/icons-material/Search';
import {Box, IconButton, Paper, Stack} from '@mui/material';
import {SideMenuEnum} from '@store/slices/application.slice';

import s from './style.module.scss';


export const Toolbar = () => {
    const {setSideMenu} = useActions();
    const searchActive = useAppSelector(state => state.application.search);
    const bookmarksActive = useAppSelector(state => state.application.bookmarks);

    return (
        <Paper className={s.wrapper}>
            <Stack direction="column" className={s.toolbar} alignItems="center" spacing={2}>
                <Box
                    component="img"
                    alt="Your logo."
                    src="logo512.png"
                    className={s.logo}
                />

                <IconButton className={`${s.searchBtn} ${s.btn}`}
                    onClick={() => setSideMenu({sideMenu: SideMenuEnum.search, value: !searchActive})}>
                    <SearchIcon/>
                </IconButton>
                <IconButton className={`${s.bookmarkBtn} ${s.btn}`}
                    onClick={() => setSideMenu({sideMenu: SideMenuEnum.bookmarks, value: !bookmarksActive})}>
                    <BookmarkIcon/>
                </IconButton>

                <Box
                    style={{marginTop: 'auto'}}
                    component="img"
                    alt="Avatar"
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"
                    className={s.avatar}
                />
            </Stack>
        </Paper>

    );
};