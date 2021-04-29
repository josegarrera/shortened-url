import axios from 'axios';

// singleton
export const API = axios.create({
    baseURL: 'https://6089a0fb8c8043001757f2d7.mockapi.io/api/',
});