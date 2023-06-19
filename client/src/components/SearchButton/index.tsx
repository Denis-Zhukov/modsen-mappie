import s from '@components/Toolbar/style.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from '@mui/material';

export const SearchButton = () => {
    return <IconButton className={`${s.searchBtn} ${s.btn}`}>
        <SearchIcon/>
    </IconButton>;
};