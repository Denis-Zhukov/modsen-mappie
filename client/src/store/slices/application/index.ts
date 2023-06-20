import {typeIcons} from '@constants/icons';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {IUser} from '@typing/interfaces';
import type {TPlaceKind, TToolbarItem} from '@typing/types';

interface State {
    filter: TPlaceKind[],
    activeMenuItem: TToolbarItem | null;
    user: IUser | null
}

const initialState: State = {
    filter: typeIcons,
    activeMenuItem: null,
    user: null,
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

        setUser(state, {payload: {user}}: PayloadAction<{ user: IUser & { access: string } }>) {
            state.user = {id: user.picture, picture: user.picture};
            localStorage.setItem('access_token', user.access);
        },
    },
});

export const {actions: applicationActions} = applicationSlice;
export default applicationSlice.reducer;