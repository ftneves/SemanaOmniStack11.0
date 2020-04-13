import axios from 'axios';

const api = axios.create({
  baseURL: 'http://26.20.63.253:3333',
});

export default api;