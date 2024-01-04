import axios from 'axios';

/**
 * 기본적인 HttpClient 객체 구조 
 * GET, POST, PUT, DELETE 메서드 제공
 *
 * @example
 * const apiClient = new HttpClient('https://your-api-url.com');
 *
 * // GET 요청 예시
 * apiClient.get('/endpoint')
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 *
 * // POST 요청 예시
 * apiClient.post('/endpoint', { data: 'yourData' })
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 */
class HttpClient {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL: baseURL
        });
    }

    get(url, config = {}) {
        return this.client.get(url, config);
    }

    post(url, data, config = {}) {
        return this.client.post(url, data, config);
    }

    put(url, data, config = {}) {
        return this.client.put(url, data, config);
    }

    delete(url, config = {}) {
        return this.client.delete(url, config);
    }
}