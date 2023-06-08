import {createBrowserRouter} from 'react-router-dom';

import {Main} from '../pages/Main';
import {NotFound} from '../pages/NotFound';
import {Layout} from '../components/Layout';

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <NotFound/>,

        children: [
            {
                path: '/',
                element: <Main/>,
            },
        ],
    },
]);