import type {RootState} from '@store/index';

export const selectActiveToolbarItem = (state: RootState) => state.application.activeMenuItem;
export const selectFilter = (state: RootState) => state.application.filter;
export const selectUser = ({application: {user}}: RootState) => user;

export const selectCurrentPlace = ({application: {currentPlace}}: RootState) => currentPlace;