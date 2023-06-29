import {LocalStorageItems} from '@constants/LocalStorageItems';

export const setAccessToken = (value: string) => {
    localStorage.setItem(LocalStorageItems.accessToken, value);
};

export const getAccessToken = () => {
    return localStorage.getItem(LocalStorageItems.accessToken);
};

export const removeAccessToken = () => {
    localStorage.removeItem(LocalStorageItems.accessToken);
};