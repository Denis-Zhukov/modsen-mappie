import React, {useCallback, useState} from 'react';


import {Loader} from '@components/Loader';
import {useActions, useAppSelector} from '@hooks';
import {Logout} from '@mui/icons-material';
import {Box, Menu, MenuItem} from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import {GoogleLogin} from '@react-oauth/google';
import {selectUser} from '@store/selectors/application';

import {AuthService} from '../../api/AuthService';

import s from './style.module.scss';

import type {CredentialResponse} from '@react-oauth/google';


export const Profile = () => {
    const {setUser} = useActions();
    const user = useAppSelector(selectUser);
    const [processing, setProcessing] = useState(false);

    const handleOnSuccessLogin = useCallback(async (response: CredentialResponse) => {
        setProcessing(true);
        const user = await AuthService.login(response.credential!);
        setUser({user});
        setProcessing(false);
    }, [setUser]);
    const handleOnErrorLogin = () => {
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLogout = async () => {
        setProcessing(true);
        await AuthService.logout();
        setUser({user: null});
        setProcessing(false);
    };

    if (processing) return <Box
        style={{marginTop: 'auto'}}
    ><Loader/></Box>;

    return (<>
        {
            user ?
                <div style={{marginTop: 'auto'}}>
                    <Box
                        component="img"
                        alt="Avatar"
                        src={user.picture}
                        className={s.avatar}
                        onClick={handleClick}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    />
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        transformOrigin={{horizontal: 'left', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    >
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <Logout fontSize="small"/>
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
                :
                <Box
                    style={{marginTop: 'auto'}}
                >
                    <GoogleLogin
                        theme="outline"
                        size="large"
                        type="icon"
                        shape="circle"
                        onSuccess={handleOnSuccessLogin}
                        onError={handleOnErrorLogin}
                    />
                </Box>
        }
    </>);
};