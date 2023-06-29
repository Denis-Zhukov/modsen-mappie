import {$api} from '@api/instance';
import {urls} from '@constants/urls';
import axios from 'axios';

import type {ISpecificPlace} from '@typing/interfaces';
import type {IPlace} from '@typing/interfaces';
import type {TPlaceKind} from '@typing/types';


export class PlacesService {
    public static async getPlaces(lat: number, lon: number, radius: number, filter: TPlaceKind[]) {
        const {data} = await axios.get<(Omit<IPlace, 'tags'> & {
            name: string
        })[]>(urls.getUrlGetPlaces(lat, lon, radius, filter));
        return data;
    }

    public static async getPlaceById(id: number) {
        const {data} = await $api.get<ISpecificPlace>(urls.getUrlGetPlaceById(id));
        return data;
    }
}
