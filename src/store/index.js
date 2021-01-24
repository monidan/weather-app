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
      return 'No info'
    },
    getWeather(state){
      if(state.isDataProvided){
        return state.weatherData.weather
      }
      return 'No info'
    },
    getMainForecast(state){
      if(state.isDataProvided){
        return state.weatherData.main
      }
      return 'No info'
    },
    getVisibility(state){
      if(state.isDataProvided){
        return state.weatherData.visibility
      }
      return 'No info'
    },
    getWind(state){
      if(state.isDataProvided){
        return state.weatherData.wind
      }
      return 'No info'
    },
    getSunriseAndSunset(state){
      if(state.isDataProvided){
        // TODO: make it simpler
        let sunriseDate = new Date( state.weatherData.sys.sunrise * 1000),
        sunsetDate = new Date( state.weatherData.sys.sunset * 1000)
        
        let sunriseTime = sunriseDate.getHours() + ':' + sunriseDate.getMinutes(),
        sunsetTime = sunsetDate.getHours() + ':' + sunsetDate.getMinutes();
        return {
          sunrise: sunriseTime,
          sunset: sunsetTime
        }
      }
      return 'No info'
    },
    getWeatherIconId(state){
      if(state.isDataProvided){
        if(Array.isArray(state.weatherData.weather)){
          return state.weatherData.weather[0].icon
        } else {
          return state.weatherData.weather?.icon
        }
      }
      return '02n'
    }
  },
})

export default store