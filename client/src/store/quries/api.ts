import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
    tagTypes: [],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({}),
    endpoints: () => ({}),
});

