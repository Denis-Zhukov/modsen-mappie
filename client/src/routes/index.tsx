import {Main} from '@pages/Main';
import {NotFound} from '@pages/NotFound';
import {createBrowserRouter} from 'react-router-dom';

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