import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.API_URL || 'http://192.168.2.111:3001/'
});

export default axiosClient;