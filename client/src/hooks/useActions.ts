import {useMemo} from 'react';

import {bindActionCreators} from '@reduxjs/toolkit';
import {mapActions} from '@store/slices/map.slice';
import {personActions} from '@store/slices/person.slice';

import {useAppDispatch} from './redux-toolkit';


const actions = {
    ...personActions,
    ...mapActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};