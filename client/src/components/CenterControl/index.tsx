import {useCallback} from 'react';

import {useActions, useAppSelector} from '@hooks';
import {GeolocationControl} from '@pbe/react-yandex-maps';

export const CenterControl = () => {
    const [latitude, longitude] = useAppSelector(state => (
        [state.person.latitude, state.person.longitude]));
    const {setMapPosition} = useActions();

    const handleClick = useCallback(() => {
        if (latitude && longitude) setMapPosition({center: [latitude, longitude]});
    }, [longitude, latitude, setMapPosition]);

    return <GeolocationControl
        options={{
            position: {
                bottom: '1rem',
                right: '3rem',
            },
            //@ts-ignore
            noPlacemark: true,
        }}
        onClick={handleClick}
    />;
};