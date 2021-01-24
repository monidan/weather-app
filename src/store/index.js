import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/plugins/axios.js'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    weatherData: {},
    isError: false,
    isDataProvided: false
  },
  mutations: {

  },
  actions: {
    fetchWeatherData({state}, city){
      api.getWeatherData(city)
        .then(response => {
          state.weatherData = response.data
          state.isError = false
          state.isDataProvided = true;
        })
        .catch(err => {
          console.log(err)
          state.isError = true
        })
    },
  },
  getters: {
    getCity(state){
      if(state.isDataProvided){
        return state.weatherData.name
      }
    },
    getWeather(state){
      if(state.isDataProvided){
        return state.weatherData.weather
      }
    },
    getMainForecast(state){
      if(state.isDataProvided){
        return state.weatherData.main
      }
    },
    getVisibility(state){
      if(state.isDataProvided){
        return state.weatherData.visibility
      }
    },
    getWind(state){
      if(state.isDataProvided){
        return state.weatherData.wind
      }
    },
    getSunriseAndSunset(state){
      if(state.isDataProvided){
        // TODO: make it simpler
        let sunriseDate = new Date( state.weatherData.sys.sunrise * 1000),
        sunsetDate = new Date( state.weatherData.sys.sunset * 1000)
        
        let sunriseTime = (Number(sunriseDate.getHours()) > 10 ? sunriseDate.getHours() : '0' + sunriseDate.getHours()) + 
          ':' + (Number(sunriseDate.getMinutes()) > 10? sunriseDate.getMinutes() : '0' + sunriseDate.getMinutes()),
        sunsetTime = (Number(sunsetDate.getHours()) > 10 ? sunsetDate.getHours() : '0' + sunsetDate.getHours()) + 
        ':' + (Number(sunsetDate.getMinutes()) > 10? sunsetDate.getMinutes() : '0' + sunsetDate.getMinutes());
        return {
          sunrise: sunriseTime,
          sunset: sunsetTime
        }
      }
    },
    getWeatherIconId(state){
      if(state.isDataProvided){
        if(Array.isArray(state.weatherData.weather)){
          return state.weatherData.weather[0].icon
        } else {
          return state.weatherData.weather?.icon
        }
      }
    },
    getDate(state){
      if(state.isDataProvided){
        return new Date(state.weatherData.dt * 1000);
      }
    },
  },
})

export default store