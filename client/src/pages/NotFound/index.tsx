import { Endpoints } from '@constants/Endpoints';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import s from './style.module.scss';

export function NotFound() {
    return (
        <div className={s.pageContainer}>
            <Typography variant="h1" className={s.title}>
            404
            </Typography>
            <Typography variant="body1" className={s.message} mb={2}>
            Упс! Страница, которую вы ищете, не найдена.
            </Typography>
            <NavLink to={Endpoints.Main} className={s.btn}>На главную</NavLink>
        </div>
    );
}
