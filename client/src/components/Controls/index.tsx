import React from 'react';

import { SidePanel } from '@components/SidePanel';
import { Toolbar } from '@components/Toolbar';
import { toolbarPanels } from '@constants/toolbarPanels';
import { useAppSelector } from '@hooks';
import { selectActiveToolbarItem } from '@store/selectors/application';

import s from './style.module.scss';

export function Controls() {
    const activeMenuItem = useAppSelector(selectActiveToolbarItem);
    return (
        <div className={s.controls}>
            <Toolbar />
            {activeMenuItem && <SidePanel>{toolbarPanels[activeMenuItem]}</SidePanel>}
        </div>
    );
}
