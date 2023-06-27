import React, {useCallback, useEffect} from 'react';

import {Toast} from '@components/Toast';
import {useActions, useAppSelector} from '@hooks';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {Button} from '@mui/material';
import {selectToggleInfo, selectUser} from '@store/selectors/application';
import {selectToggleFavoriteStatus} from '@store/selectors/bookmarks';

import s from './style.module.scss';

export const ToggleFavoritePlaceButton = () => {
    const {toggleFavoritePlaceThunk, clearToggleStatus} = useActions();
    const {id, saved} = useAppSelector(selectToggleInfo);
    const {error,  loading} = useAppSelector(selectToggleFavoriteStatus);
    const user = useAppSelector(selectUser);

    useEffect(() => {
        clearToggleStatus();
    }, [clearToggleStatus]);

    const handleToggle = useCallback(() => {
        toggleFavoritePlaceThunk(id);
    }, [toggleFavoritePlaceThunk, id]);

    const textButton = saved ? 'Удалить' : 'Сохранить';

    return <>
        {error && <Toast type="error" message={error}/>}
        <Button
            variant="outlined"
            startIcon={<BookmarkIcon/>}
            className={s.saveBtn}
            color="error"
            onClick={handleToggle}
            disabled={user === null || loading}
        >
            {loading ? 'Подождите...' : textButton}
        </Button>
    </>;
};