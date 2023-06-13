import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface State {
    center: [number, number]
    zoom: number,
}

const initialState: State = {
    center: [0, 0],
    zoom: 0,
};

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setMapSettings(state, {payload}: PayloadAction<State>) {
            state.center = payload.center;
            state.zoom = payload.zoom;
        },

        setMapPosition(state, {payload}: PayloadAction<Omit<State, 'zoom'>>) {
            state.center = payload.center;
        },
    },
});

export const {actions: mapActions} = mapSlice;
export default mapSlice.reducer;