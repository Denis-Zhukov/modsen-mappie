import React, { useCallback } from 'react';

import { useActions } from '@hooks';
import { GeolocationControl } from '@pbe/react-yandex-maps';

export const CenterControl = React.memo(() => {
    const { centerMapByPerson } = useActions();

    const handleClick = useCallback(() => {
        centerMapByPerson();
    }, [centerMapByPerson]);

    return (
        <GeolocationControl
            options={{
                position: {
                    bottom: '16px',
                    right: '48px',
                },
                // @ts-ignore
                noPlacemark: true,
            }}
            onClick={handleClick}
        />
    );
});
