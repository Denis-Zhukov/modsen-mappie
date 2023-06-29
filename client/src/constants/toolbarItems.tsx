import { BookmarksButton } from '@components/BookmarksButton';
import { SearchButton } from '@components/SearchButton';

import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import type { TToolbarItem } from '@typing/types';

interface IToolbarItem {
    type: TToolbarItem
    component: string | ReactJSXElement | ReactJSXElement[]
}

export const toolbarItems: IToolbarItem[] = [
    { type: 'search', component: <SearchButton /> },
    { type: 'bookmarks', component: <BookmarksButton /> },
];
