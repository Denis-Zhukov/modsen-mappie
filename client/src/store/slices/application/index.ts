import {typeIcons} from '@constants/icons';
import {createSlice} from '@reduxjs/toolkit';
import {getInfoAboutPlaceThunk} from '@store/slices/application/getInfoAboutPlaceThunk';

import type {PayloadAction} from '@reduxjs/toolkit';
import type {IPlace, IUser} from '@typing/interfaces';
import type {TPlaceKind, TToolbarItem} from '@typing/types';

interface State {
    filter: TPlaceKind[],
    activeMenuItem: TToolbarItem | null;

    user: IUser | null,

    currentPlaceId: number,
    currentPlace: IPlace | null
    loading: boolean,
    error: null | any,
}

const initialState: State = {
    filter: typeIcons,
    activeMenuItem: null,
    user: null,

    currentPlaceId: 0,
    currentPlace: null,
    loading: false,
    error: null,
};

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setActiveToolbarItem(state, {payload: {clickedItemMenu}}: PayloadAction<{ clickedItemMenu: TToolbarItem }>) {
            if (clickedItemMenu === state.activeMenuItem) state.activeMenuItem = null;
            else state.activeMenuItem = clickedItemMenu;
        },
        toggleItemFilter(state, {payload: {item}}: PayloadAction<{ item: TPlaceKind }>) {
            const index = state.filter.indexOf(item);
            if (index === -1) state.filter.push(item);
            else state.filter.splice(index, 1);
        },

        setUser(state, {payload: {user}}: PayloadAction<{ user: IUser & { access: string } | null }>) {
            if (user === null) {
                state.user = user;
                localStorage.removeItem('access_token');
                return;
            }
            state.user = {id: user.id, picture: user.picture};
            localStorage.setItem('access_token', user.access);
        },

        showPlaceInfo(state, {payload: {id}}: PayloadAction<{ id: number }>) {
            state.currentPlaceId = id;
            state.activeMenuItem = 'info';
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getInfoAboutPlaceThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getInfoAboutPlaceThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.currentPlace = action.payload;
            })
            .addCase(getInfoAboutPlaceThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const {actions: applicationActions} = applicationSlice;
export default applicationSlice.reducer;