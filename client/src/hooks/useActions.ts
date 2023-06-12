import {bindActionCreators} from '@reduxjs/toolkit';
import {useMemo} from 'react';
import {positionActions} from '../store/slices/position.slice';
import {mapActions} from '../store/slices/map.slice';
import {useAppDispatch} from './redux-toolkit';


const actions = {
    ...positionActions,
    ...mapActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};