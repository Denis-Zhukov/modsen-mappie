import React from 'react';


import {toolbarPanels} from '@constants/toolbarPanels';
import {useAppSelector} from '@hooks';
import {selectActiveToolbarItem} from '@store/selectors/application';

import {SidePanel} from './SidePanel';
import styles from './style.module.scss';
import {Toolbar} from './Toolbar';

export function Controls() {
    const activeMenuItem = useAppSelector(selectActiveToolbarItem);
    return (
        <div className={styles.controls}>
            <Toolbar/>
            {activeMenuItem && <SidePanel>{toolbarPanels[activeMenuItem]}</SidePanel>}
        </div>
    );
}
