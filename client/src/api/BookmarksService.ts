import {urls} from '@constants/urls';

import {$api} from './instance';

import type {IPlace} from '@typing/interfaces';
import type {IToggleFavoritePlaceResponse} from '@typing/interfaces';
import type {AxiosResponse} from 'axios';

export class BookmarksService {
    public static async getFavoritePlaces() {
        const {data}: AxiosResponse<IPlace[]> = await $api.get(urls.getFavoritePlaces, {withCredentials: true});
        return data;
    }

    public static async toggleFavoritePlace(placeId: number) {
        const {data} = await $api.post<IToggleFavoritePlaceResponse>(urls.toggleFavoritePlace, {placeId}, {withCredentials: true});
        return data;
    }
}
