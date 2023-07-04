import {useCallback, useEffect} from 'react';

import {useActions, useAppSelector} from '@hooks';
import noImage from '@images/placeholders/no-image.png';
import {
    Alert,
    Paper,
    AlertTitle,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Skeleton,
} from '@mui/material';
import {selectUser} from '@store/selectors/application';

import styles from './style.module.scss';

export function BookmarksPanel() {
    const user = useAppSelector(selectUser);
    const [places, loading] = useAppSelector(({bookmarks}) => [bookmarks.favoritePlaces, bookmarks.loadingFavoritePlaces]);
    const {getFavoritePlacesThunk, showPlaceInfo} = useActions();

    useEffect(() => {
        getFavoritePlacesThunk();
    }, [getFavoritePlacesThunk]);

    const handleClick = useCallback((id: number) => () => {
        showPlaceInfo({id});
    }, [showPlaceInfo]);



    if (loading) {
        const skeletonItems = [...Array(3)];
        return (
            <>
                {skeletonItems.map((_, key) => (
                    <Card className={styles.card} key={key}>
                        <CardActionArea>
                            <Skeleton variant="rectangular" height={140}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </>
        );
    }

    if (!places) return null;

    if (!user) {
        return (
            <Paper>
                <Alert severity="info">
                    Для использования закладок необходимо авторизоваться
                </Alert>
            </Paper>
        );
    }

    if (places.length === 0) {
        return (
            <Alert severity="info">
                <AlertTitle>Пусто</AlertTitle>
                Закладки отсутствуют
            </Alert>
        );
    }

    return (
        <>
            {places.map((p) => (
                <Card
                    key={p.id}
                    className={styles.card}
                    onClick={handleClick(p.id)}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={p.tags.image ?? noImage}
                            alt="Place image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {p.tags['name:ru'] ?? p.tags.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {p.tags.description ?? 'Описание отсутствует'}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </>
    );
}
