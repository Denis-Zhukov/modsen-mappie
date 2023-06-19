import {typeIcons} from '@constants/icons';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {TPlaceKind, TToolbarItem} from '@typing/types';

interface State {
    filter: TPlaceKind[],
    activeMenuItem: TToolbarItem | null;
}

const initialState: State = {
    filter: typeIcons,
    activeMenuItem: null,
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
    },
});

export const {actions: applicationActions} = applicationSlice;
export default applicationSlice.reducer;