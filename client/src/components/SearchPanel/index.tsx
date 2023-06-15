import {ChangeEvent, useCallback, useState} from 'react';

import {useActions, useAppSelector} from '@hooks';
import SearchIcon from '@mui/icons-material/Search';
import {
    List,
    ListItemText,
    Box,
    Paper,
    Stack,
    TextField,
    Typography, ListItemButton, IconButton,
} from '@mui/material';

import {icons, typeIcons} from '../../contants/icons';

import s from './style.module.scss';

export const SearchPanel = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item: any) => {
        setSelectedItem(item);
    };

    const radius = useAppSelector(state => state.person.radius);
    const {setPersonRadius} = useActions();

    const handleChangeRadius = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const radius = +e.target.value;
        if (radius > 0) setPersonRadius({radius: radius});
    }, [setPersonRadius]);

    return <Paper className={s.searchPanel}>
        <Stack spacing={2}>
            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <SearchIcon/>
                <TextField id="input-with-sx" label="Место" variant="standard"/>
            </Box>
            <h3>Отображать: </h3>
            <List className={s.categories}>
                {typeIcons.map((type) => (
                    <ListItemButton
                        key={type}
                        selected={selectedItem === type}
                        onClick={() => handleItemClick(type)}
                    >
                        <ListItemText primary={icons[type].text}/>
                    </ListItemButton>
                ))}
            </List>
            <h3>Радиус: </h3>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                <TextField type="number" value={radius} onChange={handleChangeRadius} className={s.radiusField}/>
                <Typography>м</Typography>
            </Box>
            <IconButton className={`${s.btn} ${s.searchBtn}`}>
                <SearchIcon/>
            </IconButton>
        </Stack>
    </Paper>;
};