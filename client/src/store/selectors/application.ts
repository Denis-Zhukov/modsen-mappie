import type {RootState} from '@store/index';

export const selectActiveToolbarItem = ({application}: RootState) => application.activeMenuItem;
export const selectFilter = ({application}: RootState) => application.filters;
export const selectUser = ({application: {user}}: RootState) => user;
export const selectCurrentPlace = ({application}: RootState) => application.currentPlace;