import {useMemo} from 'react';

import {bindActionCreators} from '@reduxjs/toolkit';
import {applicationActions} from '@store/slices/application.slice';
import {mapActions} from '@store/slices/map.slice';
import {personActions} from '@store/slices/person.slice';

import {useAppDispatch} from './redux-toolkit';


const actions = {
    ...personActions,
    ...mapActions,
    ...applicationActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};