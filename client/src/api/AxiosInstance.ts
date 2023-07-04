import {BASE_URL, urls} from '@constants/urls';
import {getAccessToken, setAccessToken} from '@utils/localStorage';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
    return config;
});

axiosInstance.interceptors.response.use((config) => config, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        const {data} = await axios.post<{ access: string }>(urls.refresh, {}, {withCredentials: true});
        setAccessToken(data.access);
        return axiosInstance.request(originalRequest);
    }
    throw error;
});
