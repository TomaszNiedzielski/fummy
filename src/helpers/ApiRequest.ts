import { API_URL } from '../constants';
import { toast } from 'react-toastify';
import axios from 'axios';

export interface Response {
    code: number;
    data: any;
    errors: any;
    message: string;
}

export const post = (url: string, data?: object, onUploadProgress?: (p: unknown) => void) => {
    // let body: any;
    // let headers: object;
    
    // if(isFormData) {
    //     body = data;
    // } else {
    //     body = JSON.stringify(data);
    //     headers = {
    //         'Content-Type': 'application/json'
    //     }
    // }
 
    // return new Promise(function(resolve, reject) {
    //     fetch(API_URL+url, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             ...headers
    //         },
    //         body: body
    //     })
    //     .then(response => response.json())
    //     .then((response: Response) => {
    //         resolve(response);
    //     })
    //     .catch(e => {
    //         reject(e);
    //         toast.error('Coś poszło nie tak. Sprawdź swoje połączenie z internetem.');
    //     });
    // });

    return new Promise(function(resolve, reject) {
        axios.request({
            method: 'post', 
            url: API_URL+url, 
            data: data,
            onUploadProgress: (p) => {
                onUploadProgress && onUploadProgress(p);
            }
        })
        .then(res => {
            resolve(res.data);
        })
        .catch(e => {
            reject(e);
            toast.error('Coś poszło nie tak. Sprawdź swoje połączenie z internetem.');
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