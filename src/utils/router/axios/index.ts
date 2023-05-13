import axios from 'axios'

export const axiosinstance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });


  export const coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
