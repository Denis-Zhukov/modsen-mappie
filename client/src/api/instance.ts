import {BASE_URL, urls} from '@constants/urls';
import {getAccessToken, setAccessToken} from '@utils/localStorage';
import axios from 'axios';

export const $api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
    return config;
});

$api.interceptors.response.use((config) => config, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        const {data} = await axios.post<{ access: string }>(urls.refresh, {}, {withCredentials: true});
        setAccessToken(data.access);
        return $api.request(originalRequest);
    }
    throw error;
});
