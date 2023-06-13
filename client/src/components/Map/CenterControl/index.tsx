import {GeolocationControl} from '@pbe/react-yandex-maps';
import {useActions, useAppSelector} from '@hooks';
import {useCallback} from 'react';

export const CenterControl = () => {
    const [latitude, longitude] = useAppSelector(state => (
        [state.position.latitude, state.position.longitude]));
    const {setMapPosition} = useActions();

    const handleClick = useCallback(() => {
        setMapPosition({center: [latitude, longitude]});
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