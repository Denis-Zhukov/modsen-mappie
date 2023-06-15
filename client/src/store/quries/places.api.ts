import {api} from './api';


const placesApi = api.injectEndpoints({
    endpoints: builder => ({
        getPlaces: builder.query({
            query: ({geometry, radius}: { geometry: [number | null, number | null], radius: number }) => {
                const url = `${process.env.REACT_APP_BACK_END}/all-places?latitude=${geometry[0]}&longitude=${geometry[1]}&radius=${radius}`;

                if (!geometry[0] || !geometry[1]) {
                    throw new Error('Invalid geometry');
                }

                return ({
                    url,
                    method: 'GET',
                    headers: {
                        'Bypass-Tunnel-Reminder': 'skip-tunnel',
                    },
                });
            },

        }),
    }),
});
export const {
    useGetPlacesQuery,
} = placesApi;