<template>
  <div id="weather-card">
    <v-container>
      <v-col
        cols='12'
        md="8"
        lg='8'
        class="weather-card__column"
      >
        <v-row>
          <div class="weather-card__inner rounded-lg blue lighten-1">
            <div class="weather-card__inner_icon">
              <img :src="weatherIcon(getWeatherIconId)" alt="">
            </div>
            <div class="weather-card__inner_city">
              {{getCity}}
            </div>
            <div class="weather-card__inner_weather">
              {{getWeather}}
            </div>
          </div>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'WeatherCard',
  data(){
    return {
    }
  },
  methods: {
     weatherIcon(iconId){
       return `http://openweathermap.org/img/wn/${iconId}@2x.png`
    },
  },
  computed: {
    city(){
      return this.$store.getters.getSunriseAndSunset
    },
    ...mapGetters([
      'getCity',
      'getWeather',
      'getMainForecast',
      'getVisibility',
      'getWind',
      'getSunriseAndSunset',
      'getWeatherIconId'
    ])
  }
}
</script>
<style lang="scss">
  .weather-card__column{
    margin: 0 auto!important;
  }

  .weather-card__inner{
    width: 100%;
    height: 100%;
  }
</style>