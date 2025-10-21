import axios from 'axios';
import store from '../store';

const baseUrl = import.meta.env.VITE_BE_URL

const api = axios.create({
    baseURL: baseUrl, 
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = store.getState().auth.token;

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;