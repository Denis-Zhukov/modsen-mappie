import {createBrowserRouter} from 'react-router-dom';

import {Main} from '@pages/Main';
import {NotFound} from '@pages/NotFound';

export const router = createBrowserRouter([
    {
        errorElement: <NotFound/>,

        children: [
            {
                path: '/',
                element: <Main/>,
            },
        ],
    },
]);