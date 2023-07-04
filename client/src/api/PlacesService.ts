import {axiosInstance} from '@api/AxiosInstance';
import {urls} from '@constants/urls';
import axios from 'axios';

import type {ISpecificPlace} from '@typing/interfaces';
import type {IPlaceWithoutDescription} from '@typing/interfaces';
import type {TPlaceKind} from '@typing/types';


interface IGetPlacesParams {
    lat: number,
    lon: number,
    radius: number,
    filter:  TPlaceKind[]
}

export class PlacesService {
    public static async getPlaces({lat, lon, filter, radius}: IGetPlacesParams) {
        const {data} = await axios.get<IPlaceWithoutDescription[]>(urls.getUrlGetPlaces(lat, lon, radius, filter));
        return data;
    }

    public static async getPlaceById(id: number) {
        const {data} = await axiosInstance.get<ISpecificPlace>(urls.getUrlGetPlaceById(id));
        return data;
    }
}
