import {urls} from '@constants/urls';

import {$api} from './index';

export class BookmarksService {
    public static async getFavoritePlaces() {
        const response = await $api.get(urls.getFavoritePlaces, {withCredentials: true});
        return response.data;
    }

    public static async toggleFavoritePlace(placeId: number) {
        const response = await $api.post(urls.toggleFavoritePlace, {placeId}, {withCredentials: true});
        return response.data;
    }
}