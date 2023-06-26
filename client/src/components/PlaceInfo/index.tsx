import React, {useEffect} from 'react';

import {RouteButton} from '@components/RouteButton';
import {icons} from '@constants/icons';
import {useActions, useAppSelector} from '@hooks';
import noImage from '@images/placeholders/no-image.png';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {Button, Skeleton, Stack, Typography} from '@mui/material';

import s from './style.module.scss';


export const PlaceInfo = () => {
    const {getInfoAboutPlaceThunk, toggleFavoritePlaceThunk} = useActions();

    const id = useAppSelector(({application}) => application.currentPlaceId);
    const [place, loading] = useAppSelector(({application}) => [application.currentPlace, application.loading]);
    useEffect(() => {
        getInfoAboutPlaceThunk();
    }, [getInfoAboutPlaceThunk, id]);

    const handleToggle = () => {
        toggleFavoritePlaceThunk(id);
    };


    if (loading) return <>
        <Skeleton variant="rectangular" height={200}/>
        <Stack direction="row">
            <Skeleton variant="circular" width={40} height={40}/>
        </Stack>
        <Skeleton variant="text" sx={{fontSize: '3rem'}}/>
        <Typography align="justify" className={s.description}>
            <Skeleton variant="text" sx={{fontSize: '1.5rem'}}/>
        </Typography>
        <Stack direction="row" className={s.bottomBtns} justifyContent="space-between" flexWrap="wrap" gap={1}>
            <Skeleton variant="rounded" width={100} height={30}/>
            <Skeleton variant="rounded" width={100} height={30}/>
        </Stack>
    </>;

    if (!place) return null;

    return <>
        <img src={place.tags.image ?? noImage} alt="img" className={s.mainPicture}/>
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
            <RouteButton/>
        </Stack>
    </>;
};