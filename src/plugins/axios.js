import axios from 'axios'

const API_KEY='1ef053336e479a9ccf35a2156663cc84'

const _axios = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5`,
  timeout: 10000,
  responseType: 'json'
})

export default {
  getWeatherData(city) {
    return _axios.get(`/weather?q=${city}&appid=${API_KEY}`)
  }
}