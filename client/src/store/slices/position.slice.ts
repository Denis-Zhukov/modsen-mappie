import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface State {
    latitude: number,
    longitude: number,
    accuracy: number,
}

const initialState: State = {
    latitude: 0,
    longitude: 0,
    accuracy: 0,
};

const positionSlice = createSlice({
    name: 'position',
    initialState,
    reducers: {
        setPersonPosition(state, {payload}: PayloadAction<State>) {
            state.longitude = payload.longitude;
            state.latitude = payload.latitude;
            state.accuracy = payload.accuracy;
        },
    },
});

export const {actions: positionActions} = positionSlice;
export default positionSlice.reducer;