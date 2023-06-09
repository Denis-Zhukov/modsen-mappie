import {useEffect, useState} from 'react';

export interface GeoLocation {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    error: string | null;
}

export const useGeoLocation = (): GeoLocation => {
    const [geoLocation, setGeoLocation] = useState<GeoLocation>({
        latitude: null,
        longitude: null,
        accuracy: null,
        error: null,
    });

    useEffect(() => {
        let isMounted = true;
        let watchId: number | null = null;

        const handleSuccess = (position: GeolocationPosition) => {
            if (isMounted) {
                setGeoLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                    error: null,
                });
            }
        };

        const handleError = (error: GeolocationPositionError) => {
            if (isMounted) {
                setGeoLocation({
                    latitude: null,
                    longitude: null,
                    accuracy: null,
                    error: error.message,
                });
            }
        };

        const watchLocation = () => {
            if (navigator.geolocation) {
                watchId = navigator.geolocation.watchPosition(
                    handleSuccess,
                    handleError,
                );
            } else {
                setGeoLocation({
                    latitude: null,
                    longitude: null,
                    accuracy: null,
                    error: 'Geolocation is not supported',
                });
            }
        };

        watchLocation();

        return () => {
            isMounted = false;
            if (watchId !== null) {
                navigator.geolocation.clearWatch(watchId);
            }
        };
    }, []);

    return geoLocation;
};