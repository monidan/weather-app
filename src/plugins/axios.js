import axios from 'axios'
import store from '@/store/index'

const API_KEY='1ef053336e479a9ccf35a2156663cc84'

const _axios = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5`,
  timeout: 10000,
  responseType: 'json'
})

_axios.interceptors.request.use(config => {
  store.state.isLoading = true;
  return config
})

_axios.interceptors.response.use(response => {
  store.state.isLoading = false
  return response
})

export default {
  getWeatherData(city) {
    return _axios.get(`/weather?q=${city}&appid=${API_KEY}`)
  }
}