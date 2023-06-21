import {useEffect} from 'react';

import {useActions, useAppSelector} from '@hooks';
import noImage from '@images/no-image.png';
import {Alert, Paper, AlertTitle, Card, CardActionArea, CardMedia, CardContent, Typography} from '@mui/material';
import {selectUser} from '@store/selectors/application';

import s from './style.module.scss';

export const BookmarksPanel = () => {
    const user = useAppSelector(selectUser);
    const places = useAppSelector(state => state.bookmarks.favoritePlaces);
    const {getFavoritePlacesThunk, showPlaceInfo} = useActions();

    useEffect(() => {
        getFavoritePlacesThunk();
    }, [getFavoritePlacesThunk]);

    const handleClick = (id: number) => {
        showPlaceInfo({id});
    };

    if (!places) return null;

    if (!user) return <Paper>
        <Alert severity="info">
            Для использования закладок необходимо авторизоваться
        </Alert>
    </Paper>;

    if (places.length === 0) return <Alert severity="info">
        <AlertTitle>Пусто</AlertTitle>
        Закладки отсутствуют
    </Alert>;

    return <>
        {places.map(p => (<Card
            key={p.id}
            className={s.card}
            onClick={() => handleClick(p.id)}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={p.tags.image ?? noImage}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {p.tags['name:ru'] ?? p.tags['name']}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {p.tags.description ?? 'Описание отсутствует'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>),
        )}
    </>;
};