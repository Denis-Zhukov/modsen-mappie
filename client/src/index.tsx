import React from 'react';

import {YMaps} from '@pbe/react-yandex-maps';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';

import {router} from './routes';
import {store} from './store';
import 'normalize.css';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

console.log('BACK:', process.env.REACT_APP_BACK_END)
root.render(
    <Provider store={store}>
        <YMaps query={{apikey: process.env.REACT_APP_YANDEX_API_KEY}}>
            <RouterProvider router={router}/>
        </YMaps>
    </Provider>,
);