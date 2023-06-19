import s from '@components/Toolbar/style.module.scss';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {IconButton} from '@mui/material';

export const BookmarksButton = () => {
    return (
        <IconButton className={`${s.bookmarkBtn} ${s.btn}`}>
            <BookmarkIcon/>
        </IconButton>
    );
};