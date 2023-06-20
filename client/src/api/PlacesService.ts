import {urls} from '@constants/urls';
import axios from 'axios';

import type {TPlaceKind} from '@typing/types';


export class PlacesService {
    public static async getPlaces(lat: number, lon: number, radius: number, filter: TPlaceKind[]) {
        return await axios.get(urls.getUrlGetPlaces(lat, lon, radius, filter));
    }

    public static async getPlaceById(id:number) {
        return await axios.get(urls.getUrlGetPlaceById(id));
    }
}