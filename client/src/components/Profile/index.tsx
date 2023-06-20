import React, {useCallback} from 'react';


import s from '@components/Toolbar/style.module.scss';
import {useActions, useAppSelector} from '@hooks';
import {Box} from '@mui/material';
import {GoogleLogin} from '@react-oauth/google';
import {selectUser} from '@store/selectors/application';

import {AuthService} from '../../api/AuthService';

import type {CredentialResponse} from '@react-oauth/google';


export const Profile = () => {
    const {setUser} = useActions();
    const user = useAppSelector(selectUser);

    const handleOnSuccessLogin = useCallback(async (response: CredentialResponse) => {
        const user = await AuthService.login(response.credential!);
        setUser({user});
    }, [setUser]);
    const handleOnErrorLogin = () => {

    };

    return (<>
        {
            user ?
                <Box
                    style={{marginTop: 'auto'}}
                    component="img"
                    alt="Avatar"
                    src={user.picture}
                    className={s.avatar}
                /> :
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