import s from '@components/Controls/Toolbar/style.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

export function SearchButton() {
    return (
        <IconButton className={`${s.searchBtn} ${s.btn}`}>
            <SearchIcon />
        </IconButton>
    );
}
