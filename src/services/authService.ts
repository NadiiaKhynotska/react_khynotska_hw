import {IAuth, ITokens, IUser} from "../interfaces";
import {apiService, IRes} from "./apiService";
import {urls} from "../constants";


const accessTokenKey = 'access';
const refreshTokenKey = 'refresh'
const authService = {

    register(user: IAuth): IRes<IUser> {
        return apiService.post(urls.auth.register, user)
    },

    async login(user: IAuth): Promise<IUser> {
        const {data} = await apiService.post<ITokens>(urls.auth.login, user);
        this.setTokens(data)
        const {data:me} = await this.me();
        return me
    },

    me(): IRes<IUser> {
        return apiService.get(urls.auth.me)
    },

    setTokens({refresh, access}: ITokens): void {
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },

    getAccessToken(): string {
        return localStorage.getItem(accessTokenKey)
    },
    getRefreshToken(): string {
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokens(): void {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }
}

export {authService}