import React from 'react';

import {env} from '@constants/env';
import {YMaps} from '@pbe/react-yandex-maps';
import {GoogleOAuthProvider} from '@react-oauth/google';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';

import {router} from './routes';
import {store} from './store';
import 'normalize.css';
import '@styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <GoogleOAuthProvider clientId={env.googleClientId}>
        <Provider store={store}>
            <YMaps query={{apikey: env.yandexApi}}>
                <RouterProvider router={router}/>
            </YMaps>
        </Provider>
    </GoogleOAuthProvider>,
);
