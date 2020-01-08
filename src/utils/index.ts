type keysLocalStorage = "token" | "refresh_token" | "timeout_token" | "saved_in"

/**
 * Get variables of .env
 */
export function getEnvs() {
  return process.env;
}

export function loadLocalStorage(key: keysLocalStorage) {
  return localStorage.getItem(key);
}

export function loadToken() {
  return loadLocalStorage('token');
}

export function loadRefreshToken() {
  return loadLocalStorage('refresh_token');
}

export function saveLocalAuthData(authData: any) {
  localStorage.setItem('token', authData['access_token'])
  localStorage.setItem('refresh_token', authData['refresh_token']);
  localStorage.setItem('timeout_token', authData['expires_in']);
  localStorage.setItem('saved_in', new Date().getTime().toString());
}

export function parseQuery(object: any) {
  let params = ""

  Object.keys(object).forEach(key => {
    const param = `${key}=${object[key]}`;

    if (params) {
      params += `&${param}`
    } else {
      params += `?${param}`
    }
  })

  return params;
}

export function toBase64(text: string) {
  return btoa(text)
}
