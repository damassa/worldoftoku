import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.defaults.headers.common['Content-Type'] =
  'application/json;charset=utf-8';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

api.interceptors.request.use(async (config) => {
  if (localStorage.token) {
    config.headers['x-access-token'] = localStorage.token;
  }

  return config;
});

export default api;
