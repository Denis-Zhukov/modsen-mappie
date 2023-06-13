import {useMemo} from 'react';
import {useLocation} from 'react-router-dom';

export const useGetQueryParam = (key: string) => {
    const location = useLocation();
    return useMemo(() => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(key) || '';
    }, [location.search, key]);
};