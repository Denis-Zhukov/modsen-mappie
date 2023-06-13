import {api} from './api';


const placesApi = api.injectEndpoints({
    endpoints: builder => ({
        getPlaces: builder.query({
            query: ({geometry, radius}: { geometry: [number, number], radius: number }) => {
                const queryString = `[out:json];
                (
                    node(around:${radius},${geometry[0]},${geometry[1]})["natural"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["tourism"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["historic"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["man_made"="monument"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["religion"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["historic"="castle"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["historic"="fort"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["historic"="tower"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["historic"="bunker"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["historic"="archaeological_site"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["historic"="memorial"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["building"="pyramid"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["building"="amphitheatre"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["building"="palace"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["building"="arc"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["building"="watchtower"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["building"="lighthouse"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["industrial"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["leisure"="viewpoint"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["leisure"="attraction"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["leisure"="park"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["leisure"="amusement_ride"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["leisure"="sports_centre"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["adult"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["amenity"="fuel"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["amenity"="bicycle_rental"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["amenity"="restaurant"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["amenity"="cafe"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["amenity"="bank"];
                    node(around:${radius},${geometry[0]},${geometry[1]})["amenity"="hotel"];
                  );
                out center;`;

                const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(queryString)}`;

                return ({
                    url,
                    method: 'GET',
                });
            },
        }),
    }),
});
export const {
    useGetPlacesQuery,
} = placesApi;