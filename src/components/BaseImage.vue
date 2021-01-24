<template>
  <div class="weather-image">
        <img :src="getURL" alt="Weather Image">
  </div>
</template>
<script>
export default {
  name: 'WeatherImage',
  props: {
    iconId: {
      type: String,
      required: true
    },
  },
  computed: {
    getURL(){
      return `http://openweathermap.org/img/wn/${this.iconId}@2x.png`
    }
  }
}
</script>
<style lang="scss">
  
</style>