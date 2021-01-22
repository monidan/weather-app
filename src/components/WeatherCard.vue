<template>
  <div id="weather-card">
    {{ city }}
  </div>
</template>
<script>
export default {
  name: 'WeatherCard',
  data(){
    return {
    }
  },
  computed: {
    city(){
      return this.$store.getters.getCity
    }
  }
}
</script>
<style lang="scss">
  
</style>