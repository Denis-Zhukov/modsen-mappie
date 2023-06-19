import type {FC, ReactNode} from 'react';
import {useCallback} from 'react';

import {useActions} from '@hooks';

import type {TToolbarItem} from '@typing/types';


interface Props {
    children: string | ReactNode | ReactNode[]
    type: TToolbarItem
}

export const ToolbarItem: FC<Props> = ({children, type}) => {
    const {setActiveToolbarItem} = useActions();

    const handleClick = useCallback(() => {
        setActiveToolbarItem({clickedItemMenu: type});
    }, [setActiveToolbarItem, type]);

    return <div onClick={handleClick}>{children}</div>;
};