import { API_URL } from '../constants';
import { toast } from 'react-toastify';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { restoreToken } from '../redux/actions/user/Profile';

export interface Response {
    code: number;
    data: any;
    errors: any;
    message: string;
}

type httpMethod = 'post' | 'get' | 'put' | 'patch' | 'delete';

const base = (method: httpMethod, url: string, data?: object, onUploadProgress?: (p: unknown) => void) => {
    const token = restoreToken();

    return new Promise(function(resolve, reject) {
        axios.request({
            method,
            url: API_URL+url+(token ? ((url.includes('?') ? '&' : '?')+'token='+token) : ''),
            data,
            onUploadProgress: (p) => {
                onUploadProgress && onUploadProgress(p);
            }
        })
        .then((res: AxiosResponse) => {
            resolve(res.data);
        })
        .catch((e: AxiosError) => {
            reject(e);

            if(e.response.status === 500) {
                toast.error('Coś poszło nie tak. Błąd serwera.');
            }
        })
    });
}

export const post = (url: string, data?: object, onUploadProgress?: (p: unknown) => void) => {
    return base('post', url, data, onUploadProgress);
}

// export const get = (url: string) => {
//     return new Promise(function(resolve, reject) {
//         fetch(API_URL+url)
//         .then(response => response.json())
//         .then((response: Response) => {
//             resolve(response);
//         })
//         .catch(e => {
//             reject(e);
//             toast.error('Coś poszło nie tak. Sprawdź swoje połączenie z internetem.');
//         });
//     });
// }

export const get = (url: string, data?: object, onUploadProgress?: (p: unknown) => void) => {
    return base('get', url, data, onUploadProgress);
}

export const put = (url: string, data?: object, onUploadProgress?: (p: unknown) => void) => {
    return base('put', url, data, onUploadProgress);
}