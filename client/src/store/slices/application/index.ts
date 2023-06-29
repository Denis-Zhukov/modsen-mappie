import {typeIcons} from '@constants/icons';
import {createSlice} from '@reduxjs/toolkit';
import {getInfoAboutPlaceThunk} from '@store/slices/application/getInfoAboutPlaceThunk';
import {removeAccessToken, setAccessToken} from '@utils/localStorage';

import type {PayloadAction} from '@reduxjs/toolkit';
import type {IPlace, IUser} from '@typing/interfaces';
import type {TPlaceKind, TToolbarItem} from '@typing/types';

interface State {
    nameFilter: string,
    typeFilter: TPlaceKind[],
    activeToolbarItem: TToolbarItem | null;

    user: IUser | null,

    currentPlaceId: number,
    currentPlace: IPlace & { saved?: boolean } | null
    loading: boolean,
    error: null | any
}

const initialState: State = {
    nameFilter: '',
    typeFilter: typeIcons,
    activeToolbarItem: null,
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
        setActiveToolbarItem(state, {payload: {activeToolbarItem}}: PayloadAction<Pick<State, 'activeToolbarItem'>>) {
            state.activeToolbarItem = activeToolbarItem;
        },
        setNameFilter(state, {payload: {name}}: PayloadAction<{ name: string }>) {
            state.nameFilter = name;
        },
        toggleItemFilter({typeFilter}, {payload: {item}}: PayloadAction<{ item: TPlaceKind }>) {
            const index = typeFilter.indexOf(item);
            if (index === -1) typeFilter.push(item);
            else typeFilter.splice(index, 1);
        },
        setUser(state, {payload: {user}}: PayloadAction<{ user: IUser & { access: string } | null }>) {
            if (!user) {
                state.user = null;
                return removeAccessToken();
            }
            state.user = {id: user.id, picture: user.picture};
            setAccessToken(user.access);
        },
        showPlaceInfo(state, {payload: {id}}: PayloadAction<{ id: number }>) {
            state.currentPlaceId = id;
            state.activeToolbarItem = 'info';
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getInfoAboutPlaceThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getInfoAboutPlaceThunk.fulfilled, (state, {payload}: PayloadAction<{
                place: IPlace,
                saved: boolean
            }>) => {
                state.loading = false;
                state.currentPlace = {...payload.place, saved: payload.saved};
            })
            .addCase(getInfoAboutPlaceThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message ?? 'Произошла неожиданная ошибка';
            });
    },
});

export const {actions: applicationActions} = applicationSlice;
export default applicationSlice.reducer;
