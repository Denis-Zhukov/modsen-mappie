import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import {YMaps} from '@pbe/react-yandex-maps';
import {router} from './routes';
import {store} from './store';
import 'normalize.css';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <YMaps query={{apikey: '1c44c10e-29c0-4a80-a410-3e10cdf6818c'}}>
            <RouterProvider router={router}/>
        </YMaps>
    </Provider>,
);