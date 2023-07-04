import { Endpoints } from '@constants/Endpoints';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

export function NotFound() {
    return (
        <div className={styles.pageContainer}>
            <Typography variant="h1" className={styles.title}>
            404
            </Typography>
            <Typography variant="body1" className={styles.message} mb={2}>
            Упс! Страница, которую вы ищете, не найдена.
            </Typography>
            <NavLink to={Endpoints.Main} className={styles.btn}>На главную</NavLink>
        </div>
    );
}
