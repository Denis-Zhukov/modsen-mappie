import {urls} from '@constants/urls';
import axios from 'axios';

import {$api} from './instance';

export class AuthService {
    public static async login(credentials: string) {
        const response = await axios.post(urls.login, {credentials}, {withCredentials: true});
        return response.data;
    }

    public static async checkAuth(accessToken: string) {
        const response = await $api.post(urls.checkAuth, {accessToken}, {withCredentials: true});
        return response.data;
    }

    public static async logout() {
        await axios.post(urls.logout, {}, {withCredentials: true});
    }
}