import {TPlaceKind} from '@typing/types';

export interface IPlace {
    id: number,
    position: [number, number],
    tags: { [key: string]: string },
    type: TPlaceKind
}

export interface IUser {
    id: string
    picture: string
}

export interface IToggleFavoritePlaceResponse {
    added: boolean,
    deleted: boolean,
}

export interface IPlaceWithoutDescription {
    id: number,
    position: [number, number],
    name: string,
    type: TPlaceKind
}

export interface ISpecificPlace {
    place: IPlace,
    saved: boolean
}