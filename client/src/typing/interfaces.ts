import {TPlaceKind} from '@typing/types';

export interface IPlace {
    id: number,
    position: [number, number],
    tags: { [key: string]: string },
    type: TPlaceKind
}