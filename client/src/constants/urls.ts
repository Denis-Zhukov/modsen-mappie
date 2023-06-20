export const BASE_URL = process.env.REACT_APP_BACK_END!;

export const urls = {
    getUrlGetPlaces: (lat: number, lon: number, radius: number) => BASE_URL + `/all-places?latitude=${lat}&longitude=${lon}&radius=${radius}`,
    login: BASE_URL + '/login',
    checkAuth: BASE_URL + '/check-auth',
    refresh: BASE_URL + '/refresh',
    logout: BASE_URL + '/logout',
};