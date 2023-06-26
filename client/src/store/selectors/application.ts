import type {RootState} from '@store/index';

export const selectActiveToolbarItem = ({application}: RootState) => application.activeMenuItem;
export const selectFilter = ({application}: RootState) => application.typeFilter;
export const selectUser = ({application: {user}}: RootState) => user;
export const selectCurrentPlace = ({application}: RootState) => application.currentPlace;