import {Profile} from '@components/Profile';
import {toolbarItems} from '@constants/toolbarItems';
import {Box, Paper, Stack} from '@mui/material';

import styles from './style.module.scss';
import {ToolbarItem} from './ToolbarItem';

export const Toolbar = () => (
    <Paper className={styles.wrapper}>
        <Stack direction="column" className={styles.toolbar} alignItems="center" spacing={2}>
            <Box
                component="img"
                alt="Your logo."
                src="logo512.png"
                className={styles.logo}
            />
            {toolbarItems.map((item, i) => (
                <ToolbarItem key={i} type={item.type}>{item.component}</ToolbarItem>
            ))}
            <Profile/>
        </Stack>
    </Paper>
);
