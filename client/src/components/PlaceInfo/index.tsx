import React, {useEffect} from 'react';

import {icons} from '@constants/icons';
import {useActions, useAppSelector} from '@hooks';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocationIcon from '@mui/icons-material/LocationOn';
import {Button, Paper, Stack, Typography} from '@mui/material';

import s from './style.module.scss';


export const PlaceInfo = () => {
    const {getInfoAboutPlaceThunk, toggleFavoritePlaceThunk} = useActions();
    const id = useAppSelector(state => state.application.currentPlaceId);
    const place = useAppSelector(state => state.application.currentPlace);

    useEffect(() => {
        getInfoAboutPlaceThunk();
    }, [getInfoAboutPlaceThunk, id]);

    const handleToggle = () => {
        toggleFavoritePlaceThunk(id);
    };

    if (!place) return null;

    return <Paper className={s.wrapper}>
        <Stack p={1} spacing={2} className={s.block}>
            <img src="https://placehold.co/600x400/EEE/31343C" alt="img" className={s.mainPicture}/>
            <Stack direction="row">
                <img src={icons[place.type].src} alt={icons[place.type].text} className={s.icon}/>
            </Stack>
            <h2>{place.tags['name:ru'] ?? place.tags['name']}</h2>
            <Typography align="justify"
                className={s.description}>{place.tags.description ?? 'Описание отсутствует'}</Typography>
            <Stack direction="row" className={s.bottomBtns} justifyContent="space-between" flexWrap="wrap" gap={1}>
                <Button variant="outlined" startIcon={<BookmarkIcon/>} className={s.saveBtn} color="error"
                    onClick={handleToggle}>
                    Сохранить
                </Button>
                <Button variant="contained" startIcon={<LocationIcon/>}>
                    Маршрут
                </Button>
            </Stack>
        </Stack>
    </Paper>;
};