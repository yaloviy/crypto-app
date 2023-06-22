import axios from 'axios'

const token = sessionStorage.getItem('token')

export const axiosinstance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const axiosinstanceAuth = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    Authorization: `Bearer ${token}`
  }
});



  export const coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
