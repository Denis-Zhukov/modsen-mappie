import { BookmarksPanel } from '@components/BookmarksPanel';
import { PlaceInfo } from '@components/PlaceInfo';
import { SearchPanel } from '@components/SearchPanel';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { TToolbarItem } from '@typing/types';

type TPanel = Record<TToolbarItem, string | ReactJSXElement | ReactJSXElement[]>

export const toolbarPanels: TPanel = {
    search: <SearchPanel />,
    bookmarks: <BookmarksPanel />,
    info: <PlaceInfo />,
};
