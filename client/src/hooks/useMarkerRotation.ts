import { useEffect, useState } from 'react';

export const useMarkerRotation = () => {
    const [markerRotation, setMarkerRotation] = useState<number>(0);

    useEffect(() => {
        const handleOrientation = ({ alpha }: DeviceOrientationEvent) => {
            const rotation = alpha ? 360 - alpha : 0;
            setMarkerRotation(rotation);
        };
        window.addEventListener('deviceorientation', handleOrientation, true);

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

    return markerRotation;
};
