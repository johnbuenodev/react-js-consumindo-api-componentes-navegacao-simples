import axios from 'axios';

//'https://api.tvmaze.com/search/shows?q=star%20wars'
const apiAxios = axios.create({
  baseURL: 'https://api.tvmaze.com',
  timeout: 1000,
  headers: {}
});

export default apiAxios;