import type { TPlaceKind } from '@typing/types';

export const BASE_URL = process.env.REACT_APP_BACK_END!;

export const urls = {
    getUrlGetPlaces: (lat: number, lon: number, radius: number, categories: TPlaceKind[]) => `${BASE_URL}/places?latitude=${lat}&longitude=${lon}&radius=${radius}&categories=${categories.join(',')}`,
    getUrlGetPlaceById: (id: number) => `${BASE_URL}/place/${id}`,

    login: `${BASE_URL}/login`,
    checkAuth: `${BASE_URL}/check-auth`,
    refresh: `${BASE_URL}/refresh`,
    logout: `${BASE_URL}/logout`,

    getFavoritePlaces: `${BASE_URL}/favorite-places`,
    toggleFavoritePlace: `${BASE_URL}/toggle-favorite-place`,
};
