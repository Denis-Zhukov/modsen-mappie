import { BookmarksPanel } from '@components/Controls/SidePanel/BookmarksPanel';
import { SearchPanel } from '@components/Controls/SidePanel/SearchPanel';
import { PlaceInfo } from '@components/PlaceInfo';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { TToolbarItem } from '@typing/types';

type TPanel = Record<TToolbarItem, string | ReactJSXElement | ReactJSXElement[]>

export const toolbarPanels: TPanel = {
    search: <SearchPanel />,
    bookmarks: <BookmarksPanel />,
    info: <PlaceInfo />,
};
