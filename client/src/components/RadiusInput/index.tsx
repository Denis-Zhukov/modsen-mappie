import {
    useCallback, useEffect, useRef, useState,
} from 'react';

import { Toast } from '@components/Toast';
import { useActions, useAppSelector } from '@hooks';
import { TextField } from '@mui/material';
import { selectRadius } from '@store/selectors/geolocation';

import s from './style.module.scss';

export function RadiusInput() {
    const radius = useAppSelector(selectRadius);
    const inputRef = useRef<HTMLInputElement>();
    const { setPersonRadius } = useActions();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (inputRef.current) { inputRef.current.value = `${radius}`; }
    }, [radius]);

    const handleChangeRadius = useCallback(() => {
        const radius = +inputRef.current?.value!;
        if (radius > 0 && radius <= 150000) {
            setPersonRadius({ radius });
            setError(false);
        } else setError(true);
    }, [setPersonRadius]);

    return (
        <>
            <TextField
                inputRef={inputRef}
                type="number"
                onChange={handleChangeRadius}
                className={s.radiusField}
                error={error}
            />
            {error && (
                <Toast
                    type="error"
                    message="Неверно указан радиус"
                />
            )}
        </>
    );
}
