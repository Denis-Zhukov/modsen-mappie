import React from 'react';

import {YMaps} from '@pbe/react-yandex-maps';
import {GoogleOAuthProvider} from '@react-oauth/google';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';

import {router} from './routes';
import {store} from './store';

import 'normalize.css';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE!}>
        <Provider store={store}>
            <YMaps query={{apikey: process.env.REACT_APP_YANDEX_API_KEY}}>
                <RouterProvider router={router}/>
            </YMaps>
        </Provider>
    </GoogleOAuthProvider>,
);