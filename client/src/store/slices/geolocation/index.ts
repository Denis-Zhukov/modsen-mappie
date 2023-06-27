import {createSlice} from '@reduxjs/toolkit';
import {getPlacesThunk} from '@store/slices/geolocation/getPlacesThunk';

import type {PayloadAction} from '@reduxjs/toolkit';
import type {IPlace} from '@typing/interfaces';


interface State {
    center: [number, number]
    zoom: number,

    places: (Omit<IPlace, 'tags'> & { name: string })[],
    loading: boolean,
    error: null | any,

    personCoords: [number, number] | [null, null],
    geoAccuracy: number | null,
    radius: number,
}

const initialState: State = {
    center: [0, 0],
    zoom: 0,

    places: [],
    loading: false,
    error: null,

    personCoords: [null, null],
    geoAccuracy: null,
    radius: 1000,
};

const geolocationSlice = createSlice({
    name: 'geolocation',
    initialState,
    reducers: {
        setMapSettings(state, {payload}: PayloadAction<Pick<State, 'center' | 'zoom'>>) {
            state.center = payload.center;
            state.zoom = payload.zoom;
        },

        setMapPosition(state, {payload}: PayloadAction<Pick<State, 'center'>>) {
            state.center = payload.center;
        },

        setPersonPosition(state, {payload}: PayloadAction<Pick<State, 'personCoords' | 'geoAccuracy'>>) {
            state.personCoords = payload.personCoords;
            state.geoAccuracy = payload.geoAccuracy;
        },

        setPersonRadius(state, {payload}: PayloadAction<Pick<State, 'radius'>>) {
            state.radius = payload.radius;
        },

        centerMapByPerson(state) {
            if (!state.personCoords.some(coord => coord === null))
                state.center = state.personCoords as [number, number];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPlacesThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPlacesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.places = action.payload;
            })
            .addCase(getPlacesThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message ?? 'произошла неожиданная ошибка';
            });
    },
});

export const {actions: geolocationActions} = geolocationSlice;
export default geolocationSlice.reducer;