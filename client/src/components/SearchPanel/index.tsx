import {useCallback} from 'react';

import {FilterList} from '@components/FilterList';
import {RadiusInput} from '@components/RadiusInput';
import {useActions, useAppSelector} from '@hooks';
import SearchIcon from '@mui/icons-material/Search';
import {
    Box,
    TextField,
    Typography,
} from '@mui/material';

export const SearchPanel = () => {
    const {setNameFilter} = useActions();
    const nameFilter = useAppSelector(state => state.application.nameFilter);

    const handleInput = useCallback((e: any) => {
        setNameFilter({name: e.target.value});
    }, [setNameFilter]);

    return <>
        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
            <SearchIcon/>
            <TextField id="input-with-sx" label="Название" variant="standard" value={nameFilter} onChange={handleInput}/>
        </Box>

        <h3>Отображать: </h3>
        <FilterList/>

        <h3>Радиус: </h3>
        <Box sx={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <RadiusInput/>
            <Typography>м</Typography>
        </Box>
    </>;
};