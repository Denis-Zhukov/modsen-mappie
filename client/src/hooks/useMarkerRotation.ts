import {useEffect, useState} from 'react';

export const useMarkerRotation = () => {
    const [markerRotation, setMarkerRotation] = useState<number>(0);

    useEffect(() => {
        const handleOrientation = (e: DeviceOrientationEvent) => {
            const rotation = 360 - (e.alpha || 0);
            setMarkerRotation(rotation);
        };

        window.addEventListener('deviceorientation', handleOrientation);

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

    return markerRotation;
};