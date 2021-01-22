<template>
  <div id="weather-city">
    <v-container>
      <v-col>
        <v-row justify='center'>
          <div class="weather-heading text-h1 pt-10 pb-10">
              Get weather forecast for:
          </div>
        </v-row>
      </v-col>
      <v-col
        cols='12'
        lg='6'
        class="weather-city__input-wrapper"
      >
        <v-row>
          <v-text-field
            outlined
            label='City'
            prepend-inner-icon='mdi-city'
            color='blue lighten-1'
            autocomplete='off'
            v-model="city"
          >
          </v-text-field>
          <v-btn
            @click="forecastWeather"
            color='indigo'
            class="white--text ma-2"
          >
            Forecast
          </v-btn>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'CityInput',
  data(){
    return {
      city: ''
    }
  },
  methods: {
    forecastWeather(){
      this.$store.dispatch('fetchWeatherData', this.city);
    }
  }
}
</script>
<style lang="scss">
  .weather-city__input-wrapper{
    margin: 0 auto!important;
  }
</style>