import {useState} from 'react';

import SearchIcon from '@mui/icons-material/Search';
import {List, ListItem, ListItemText, Box, Paper, Stack, TextField} from '@mui/material';

import s from './style.module.scss';

export const SearchPanel = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item:any) => {
        setSelectedItem(item);
    };

    const itemList = [
        'Элемент 1',
        'Элемент 2',
        'Элемент 3',
        'Элемент 4',
        'Элемент 5',
        'Элемент 6',
        'Элемент 7',
        'Элемент 8',
        'Элемент 9',
        'Элемент 10',
    ];

    return <Paper className={s.searchPanel}>
        <Stack>
            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <SearchIcon/>
                <TextField id="input-with-sx" label="Место" variant="standard"/>
            </Box>
            <h3>Искать: </h3>
            <List>
                {itemList.map((item) => (
                    <ListItem
                        key={item}
                        button
                        selected={selectedItem === item}
                        onClick={() => handleItemClick(item)}
                    >
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Stack>
    </Paper>;
};