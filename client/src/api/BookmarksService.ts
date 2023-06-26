import {urls} from '@constants/urls';

import {$api} from './instance';

import type {IPlace} from '@typing/interfaces';
import type {AxiosResponse} from 'axios';


export class BookmarksService {
    public static async getFavoritePlaces() {
        const response: AxiosResponse<IPlace[]> = await $api.get(urls.getFavoritePlaces, {withCredentials: true});
        return response.data;
    }

    public static async toggleFavoritePlace(placeId: number) {
        await $api.post(urls.toggleFavoritePlace, {placeId}, {withCredentials: true});
    }
}