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
          console.log(state.weatherData)
          state.isError = false
        })
        .catch(err => {
          console.log(err)
          state.isError = true
        })
    }
  },
  getters: {
    getCity(state){
      return state.weatherData.name
    }
  },
})

export default store
