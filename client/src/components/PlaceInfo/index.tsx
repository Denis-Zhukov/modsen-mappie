import React, {useEffect} from 'react';

import {RouteButton} from '@components/RouteButton';
import {Toast} from '@components/Toast';
import {ToggleFavoritePlaceButton} from '@components/ToggleFavoritePlaceButton';
import {icons} from '@constants/icons';
import {useActions, useAppSelector} from '@hooks';
import noImage from '@images/placeholders/no-image.png';
import {Skeleton, Stack, Typography} from '@mui/material';
import {selectPlaceInfo} from '@store/selectors/application';
import {selectToggleFavoriteStatus} from '@store/selectors/bookmarks';

import s from './style.module.scss';


export const PlaceInfo = () => {
    const {getInfoAboutPlaceThunk} = useActions();
    const {id, placeInfoQuery: {place, loading, error}} = useAppSelector(selectPlaceInfo);
    const {success} = useAppSelector(selectToggleFavoriteStatus);

    useEffect(() => {
        getInfoAboutPlaceThunk();
    }, [getInfoAboutPlaceThunk, success, id]);

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

    if (error) return <Toast
        type="error"
        message={error}
    />;

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
            <ToggleFavoritePlaceButton/>
            <RouteButton/>
        </Stack>
    </>;
};