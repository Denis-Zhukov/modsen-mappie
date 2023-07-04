import type {ReactNode} from 'react';
import {useCallback} from 'react';

import {useActions, useAppSelector} from '@hooks';
import {selectActiveToolbarItem} from '@store/selectors/application';

import type {TToolbarItem} from '@typing/types';

interface Props {
    children: string | ReactNode | ReactNode[]
    type: TToolbarItem
}

export function ToolbarItem({children, type}: Props) {
    const activeToolbarItem = useAppSelector(selectActiveToolbarItem);
    const {setActiveToolbarItem} = useActions();
    const handleClick = useCallback(() => {
        setActiveToolbarItem({activeToolbarItem: type === activeToolbarItem ? null : type});
    }, [activeToolbarItem, setActiveToolbarItem, type]);
    return <div onClick={handleClick}>{children}</div>;
}
