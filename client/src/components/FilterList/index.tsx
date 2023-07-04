import {icons, typeIcons} from '@constants/icons';
import {useActions, useAppSelector} from '@hooks';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {selectTypeFilter} from '@store/selectors/application';

import styles from './style.module.scss';

import type {TPlaceKind} from '@typing/types';

export function FilterList() {
    const {toggleItemFilter} = useActions();
    const types = useAppSelector(selectTypeFilter);

    const handleToggle = (value: TPlaceKind) => () => {
        toggleItemFilter({item: value});
    };

    return (
        <List dense sx={{bgcolor: 'background.paper'}} className={styles.categories}>
            {typeIcons.map((type) => {
                const labelId = `checkbox-list-secondary-label-${type}`;
                return (
                    <ListItem
                        onClick={handleToggle(type)}
                        key={type}
                        secondaryAction={(
                            <Checkbox
                                edge="end"
                                checked={types.includes(type)}
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        )}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemIcon className={styles.iconWrapper}>
                                <img src={icons[type].src} alt={type} className={styles.icon}/>
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={icons[type].text}/>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
