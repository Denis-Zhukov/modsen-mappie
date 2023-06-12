import {useLocation, useNavigate} from 'react-router-dom';

export const useSetQueryParams = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const setQueryParams = (params: { [key: string]: string }) => {
        const searchParams = new URLSearchParams(location.search);

        Object.entries(params).forEach(([key, value]) => {
            searchParams.set(key, value);
        });

        const newSearch = searchParams.toString();

        navigate({search: newSearch});
    };

    return setQueryParams;
};