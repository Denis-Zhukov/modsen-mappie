import {urls} from '@constants/urls';

import {$api} from './index';

export class AuthService {
    public static async login(credentials: string) {
        const response = await $api.post(urls.login, {credentials}, {withCredentials: true});
        return response.data;
    }

    public static async checkAuth(accessToken: string) {
        const response = await $api.post(urls.checkAuth, {accessToken}, {withCredentials: true});
        return response.data;
    }

    public static async logout() {
        await $api.post(urls.logout, {}, {withCredentials: true});
    }
}