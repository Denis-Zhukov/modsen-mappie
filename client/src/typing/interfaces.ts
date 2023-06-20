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

export interface IJwtUser {
    sub: number
    picture: string
}