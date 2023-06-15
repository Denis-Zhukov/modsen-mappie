import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface State {
    latitude: number | null,
    longitude: number | null,
    accuracy: number | null,
    radius: number,
}

const initialState: State = {
    latitude: null,
    longitude: null,
    accuracy: null,
    radius: 1000,
};

const personSlice = createSlice({
    name: 'position',
    initialState,
    reducers: {
        setPersonPosition(state, {payload}: PayloadAction<Omit<State, 'radius'>>) {
            state.longitude = payload.longitude;
            state.latitude = payload.latitude;
            state.accuracy = payload.accuracy;
        },
        setPersonRadius(state, {payload}: PayloadAction<Pick<State, 'radius'>>) {
            state.radius = payload.radius;
        },
    },
});

export const {actions: personActions} = personSlice;
export default personSlice.reducer;