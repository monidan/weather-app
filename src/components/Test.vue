<template>
  <div id="test">
    <pre>
      {{ weatherData }}
    </pre>
    <button @click="fetchData">
      Get Data
    </button>
  </div>
</template>
<script>
import axiosAPI from '@/plugins/axios'

export default {
  name: 'Test',
  data() {
    return {
      weatherData: ''
    }
  },
  methods: {
    fetchData() {
      axiosAPI.getWeatherData('Moscow')
        .then(response => this.weatherData = response.data)
        .catch(err => console.log(err))
    }
  }
}
</script>
<style lang="scss">
  
</style>