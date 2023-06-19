import {useMemo} from 'react';

import {bindActionCreators} from '@reduxjs/toolkit';
import {applicationActions} from '@store/slices/application';
import {geolocationActions} from '@store/slices/geolocation';
import {getPlacesThunk} from '@store/slices/geolocation/getPlacesThunk';

import {useAppDispatch} from './redux-toolkit';


const actions = {
    ...geolocationActions,
    ...applicationActions,
    getPlacesThunk,
};

export const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};