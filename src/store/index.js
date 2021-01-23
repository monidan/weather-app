import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/plugins/axios.js'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    weatherData: {},
    isError: false
  },
  mutations: {

  },
  actions: {
    fetchWeatherData({state}, city){
      api.getWeatherData(city)
        .then(response => {
          state.weatherData = response.data
          state.isError = false
        })
        .catch(err => {
          console.log(err)
          state.isError = true
        })
    },
  },
  getters: {
    getCity(state){
      return state.weatherData.name
    },
    getWeather(state){
      return state.weatherData.weather
    },
    getMainForecast(state){
      return state.weatherData.main
    },
    getVisibility(state){
      return state.weatherData.visibility
    },
    getWind(state){
      return state.weatherData.wind
    },
    getSunriseAndSunset(state){
      if(!state.weatherData.sys?.sunrise || !state.weatherData.sys?.sunset){
        return 'No info'
      }

      // TODO: make it simpler
      let sunriseDate = new Date( state.weatherData.sys.sunrise * 1000),
            sunsetDate = new Date( state.weatherData.sys.sunset * 1000)

      let sunriseTime = sunriseDate.getHours() + ':' + sunriseDate.getMinutes(),
          sunsetTime = sunsetDate.getHours() + ':' + sunsetDate.getMinutes();
      return {
        sunrise: sunriseTime,
        sunset: sunsetTime
      }
    },
    getWeatherIconId(state){
      return state.weatherData.weather?.icon
    }
  },
})

export default store
