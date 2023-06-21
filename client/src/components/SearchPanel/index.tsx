import {FilterList} from '@components/FilterList';
import {RadiusInput} from '@components/RadiusInput';
import SearchIcon from '@mui/icons-material/Search';
import {
    Box,
    TextField,
    IconButton, Typography,
} from '@mui/material';

import s from './style.module.scss';

export const SearchPanel = () => {
    return <>
        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
            <SearchIcon/>
            <TextField id="input-with-sx" label="Место" variant="standard"/>
        </Box>

        <h3>Отображать: </h3>
        <FilterList/>

        <h3>Радиус: </h3>
        <Box sx={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <RadiusInput/>
            <Typography>м</Typography>
        </Box>

        <IconButton className={`${s.btn} ${s.searchBtn}`}>
            <SearchIcon/>
        </IconButton>
    </>;
};