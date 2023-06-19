import {icons, typeIcons} from '@constants/icons';
import {useActions, useAppSelector} from '@hooks';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {selectFilter} from '@store/selectors/application';

import s from './style.module.scss';

import type {TPlaceKind} from '@typing/types';


export const FilterList = () => {
    const {toggleItemFilter} = useActions();
    const filter = useAppSelector(selectFilter);

    const handleToggle = (value: TPlaceKind) => {
        toggleItemFilter({item: value});
    };


    return (
        <List dense sx={{bgcolor: 'background.paper'}} className={s.categories}>
            {typeIcons.map((type) => {
                const labelId = `checkbox-list-secondary-label-${type}`;
                return (
                    <ListItem
                        onClick={() => handleToggle(type)}
                        key={type}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                checked={filter.includes(type)}
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemIcon className={s.iconWrapper}><img src={icons[type].src} alt={type} className={s.icon}/></ListItemIcon>
                            <ListItemText id={labelId} primary={icons[type].text}/>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
};