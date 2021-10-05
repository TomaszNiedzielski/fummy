import { API_URL } from '../constants';
import { toast } from 'react-toastify';
import axios, { AxiosError, AxiosResponse } from 'axios';

export interface Response {
    code: number;
    data: any;
    errors: any;
    message: string;
}

export const post = (url: string, data?: object, onUploadProgress?: (p: unknown) => void) => {
    return new Promise(function(resolve, reject) {
        axios.request({
            method: 'post', 
            url: API_URL+url, 
            data: data,
            onUploadProgress: (p) => {
                onUploadProgress && onUploadProgress(p);
            }
        })
        .then((res: AxiosResponse) => {
            resolve(res.data);
        })
        .catch((e: AxiosError) => {
            reject(e);
            const { status } = e.response;

            if(status === 500) {
                toast.error('Coś poszło nie tak. Błąd serwera.');
            } else if(status === 422) {
                toast.error('Przesłane rozszerzenie pliku nie jest wspierane.');
            } else if(status !== 401) {
                toast.error('Coś poszło nie tak. Sprawdź swoje połączenie z internetem.');
            }
        })
    });
}

export const get = (url: string) => {
    return new Promise(function(resolve, reject) {
        fetch(API_URL+url)
        .then(response => response.json())
        .then((response: Response) => {
            resolve(response);
        })
        .catch(e => {
            reject(e);
            toast.error('Coś poszło nie tak. Sprawdź swoje połączenie z internetem.');
        });
    });
}