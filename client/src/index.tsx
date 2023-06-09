import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

import {Provider} from 'react-redux';

import {YMaps} from '@pbe/react-yandex-maps';

import {router} from './routes';
import {store} from './store';

import 'normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <YMaps>
            <RouterProvider router={router}/>
        </YMaps>
    </Provider>,
);