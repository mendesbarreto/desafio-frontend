import qs from 'qs';

import { getEnvs, toBase64, loadRefreshToken, saveLocalAuthData, loadLocalStorage, parseQuery } from "../utils";
import { ProxedService } from "./proxed.service";


class AuthService extends ProxedService {
  private comsumerKey: string;
  private comsumerSecret: string;

  constructor() {
    const { REACT_APP_CONSUMER_KEY, REACT_APP_CONSUMER_SECRET, REACT_APP_API_LOGIN_YAHOO } = getEnvs();

    super(REACT_APP_API_LOGIN_YAHOO!!);

    this.comsumerKey = REACT_APP_CONSUMER_KEY!!;
    this.comsumerSecret = REACT_APP_CONSUMER_SECRET!!;
  }

  private get basicAuth() {
    return 'Basic ' + toBase64(`${this.comsumerKey}:${this.comsumerSecret}`);
  }

  get token() {
    return loadLocalStorage('token');
  }

  get hasToken() {
    return !!loadLocalStorage('token');
  }

  get tokenHasExpired() {
    const now = new Date();
    const savedIn = new Date(+loadLocalStorage('saved_in')!!);

    const diffTime = Math.abs(now.getTime() - savedIn.getTime());
    const timeout_token = +loadLocalStorage('timeout_token')!!;

    return diffTime > timeout_token
  }

  async requestToken(code: string) {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": this.basicAuth
    };

    const bodyFormData = qs.stringify({
      grant_type: "authorization_code",
      redirect_uri: "oob",
      code
    });

    const res = await this.api.post('/oauth2/get_token', bodyFormData, { headers })
    saveLocalAuthData(res.data)

    return res.data;
  }

  async refreshToken() {
    const refreshToken = loadRefreshToken();

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": this.basicAuth
    };

    const bodyFormData = qs.stringify({
      client_id: this.comsumerKey,
      client_secret: this.comsumerSecret,
      grant_type: "refresh_token",
      redirect_uri: "oob",
      refresh_token: refreshToken
    });

    const res = await this.api.post('/oauth2/get_token', bodyFormData, { headers });

    saveLocalAuthData(res.data);

    return res.data;
  }

  openPopupRequestCode() {
    const { REACT_APP_CONSUMER_KEY } = getEnvs();

    const AUTHORIZATION_URL = this.apiUrl + '/oauth2/request_auth' + parseQuery({
      client_id: REACT_APP_CONSUMER_KEY,
      redirect_uri: window.location.href,
      response_type: 'code',
      scope: 'openid'
    });

    return window.open(AUTHORIZATION_URL, 'Login com Yahoo', 'width=800,height=600')!!;
  }
}

export default new AuthService();
