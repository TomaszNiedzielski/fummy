const LOCAL_API_URL = process.env.NEXT_PUBLIC_LOCAL_API_URL;
const API_CORE = LOCAL_API_URL ? LOCAL_API_URL : 'http://fummy.co:8000';

export const API_URL = API_CORE + '/api/';
export const API_STORAGE = API_CORE + '/storage/';