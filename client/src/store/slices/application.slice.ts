import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export enum SideMenuEnum {
    search = 'search',
    bookmarks = 'bookmarks'
};

interface State {
    search: boolean,
    bookmarks: boolean,
}

const initialState: State = {
    search: false,
    bookmarks: false,
};

const applicationSlice = createSlice({
    name: 'position',
    initialState,
    reducers: {
        setSideMenu(state, {payload}: PayloadAction<{ sideMenu: SideMenuEnum, value: boolean }>) {
            const keys = Object.keys(SideMenuEnum);
            for (const key of keys) { // @ts-ignore
                state[key] = false;
            }
            state[payload.sideMenu] = payload.value;
        },
    },
});

export const {actions: applicationActions} = applicationSlice;
export default applicationSlice.reducer;