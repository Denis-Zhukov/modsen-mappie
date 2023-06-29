import React, { createContext } from 'react';

interface Context {
    mapRef: React.MutableRefObject<ymaps.Map | undefined> | null,
    routeRef: React.MutableRefObject<ymaps.multiRouter.MultiRoute | undefined> | null
}

export const MapContext = createContext<Context>({
    mapRef: null,
    routeRef: null,
});
