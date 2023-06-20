import {useEffect} from 'react';

import {useActions, useAppSelector} from '@hooks';
import {Alert, Paper} from '@mui/material';
import {selectUser} from '@store/selectors/application';

export const BookmarksPanel = () => {
    const user = useAppSelector(selectUser);
    const places = useAppSelector(state => state.bookmarks.favoritePlaces);
    const {getFavoritePlacesThunk} = useActions();

    useEffect(() => {
        getFavoritePlacesThunk();
    }, [getFavoritePlacesThunk]);

    if (!places) return null;

    if (!user) return <Paper>
        <Alert severity="info">
            Для использования закладок необходимо авторизоваться
        </Alert>
    </Paper>;

    return <Paper>{
        places.map(p => <p key={p.id}>{p.tags.name}</p>)
    }</Paper>;
};