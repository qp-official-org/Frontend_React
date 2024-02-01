// @ts-nocheck

import axios from 'axios';

class CookieManager {
  static getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift();
    } else {
      return '';
    }
  }

  static setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  static deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1999 00:00:10 GMT;`;
  }
}

class LocalStorageManager {
  static getToken(key) {
    return localStorage.getItem(key);
  }

  static setToken(key, value) {
    localStorage.setItem(key, value);
  }

  static removeToken(key) {
    localStorage.removeItem(key);
  }
}


class AxiosConfigurator {
  static configureAxiosInstance(baseUrl) {
    const instance = axios.create({
      baseURL: baseUrl,
    });

    instance.interceptors.request.use(this.requestInterceptor);
    instance.interceptors.response.use(this.responseInterceptor, this.responseErrorInterceptor);

    return instance;
  }

  static requestInterceptor(config) {
    const token = CookieManager.getCookie('access_token') || LocalStorageManager.getToken('access_token') || '';
    if (token !== '') {
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers.accessToken = `${token}`;
    } else {
      delete config.headers.accessToken;
    }
    return config;
  }

  static responseInterceptor(response) {
    return response;
  }

  static async forceRefresh(refreshToken) {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/parts/account/refresh`, {
        refresh_token: refreshToken,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async updateTokens(tokens) {
    CookieManager.setCookie('access_token', tokens.access_token, 10);
    CookieManager.setCookie('refresh_token', tokens.refresh_token, 3600);
    if (tokens.session_id) {
      CookieManager.setCookie('session_id', tokens.session_id, 10);
    }
  }

  static async responseErrorInterceptor(error) {
    if (error.response?.status === 401) {
      try {
        const refreshToken = CookieManager.getCookie('refresh_token') || '';
        if (!refreshToken || refreshToken === '') {
          CookieManager.deleteCookie('access_token');
          CookieManager.deleteCookie('refresh_token');
          CookieManager.deleteCookie('session_id');
          throw Promise.reject(error);
        }

        const tokenResponse = await AxiosConfigurator.forceRefresh(refreshToken);
        AxiosConfigurator.updateTokens(tokenResponse.result);
        error.config.headers.Authorization = `Bearer ${tokenResponse.result.access_token}`;

        return await axios(error.config);
      } catch (refreshError) {
        CookieManager.deleteCookie('access_token');
        CookieManager.deleteCookie('refresh_token');
        CookieManager.deleteCookie('session_id');
        throw Promise.reject(refreshError);
      }
    } else {
      throw Promise.reject(error);
    }
  }
}

class ApiBase {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
    this.axiosInstance = AxiosConfigurator.configureAxiosInstance(this.baseUrl);
  }
}

export class Api extends ApiBase {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async sendRequest(options) {
    const { method, url, data, content_type } = options;

    const config = {
      headers: {
        'Content-Type': content_type,
      },
    };

    return this.axiosInstance[method](url, data, config);
  }

  async rGet(url, { data, content_type = 'application/json' } = {}) {
    const response = await this.sendRequest({ method: 'get', url, data, content_type });
    return response;
  }

  async rPost(url, { data, content_type = 'application/json' } = {}) {
    const response = await this.sendRequest({ method: 'post', url, data, content_type });
    return response;
  }

  async rPut(url, { data, content_type = 'application/json' } = {}) {
    const response = await this.sendRequest({ method: 'put', url, data, content_type });
    return response;
  }

  async rDelete(url, { data, content_type = 'application/json' } = {}) {
    const response = await this.sendRequest({ method: 'delete', url, data, content_type });
    return response;
  }

  async get(url, { data, content_type = 'application/json' } = {}) {
    const response = await this.sendRequest({ method: 'get', url, data, content_type });
    return response.data;
  }

  async post(url, { data, content_type = 'application/json' } = {}) {
    const response = await this.sendRequest({ method: 'post', url, data, content_type });
    return response.data;
  }

  async put(url, { data, content_type = 'application/json' } = {}) {
    const response = await this.sendRequest({ method: 'put', url, data, content_type });
    return response.data;
  }

  async delete(url, { data, content_type = 'application/json' } = {}) {
    const response = await this.sendRequest({ method: 'delete', url, data, content_type });
    return response.data;
  }
}
