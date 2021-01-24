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
              <base-image
                :iconId='getWeatherIconId'
                v-if='this.$store.state.isDataProvided'
              ></base-image>
              <p
                v-else
              >No city provided</p>
            </div>
            <div class="weather-card__inner_city">
              {{getCity}}
            </div>
            <div class="weather-card__inner_weather">
              <pre>
                {{getWeather}}
                {{getMainForecast}}
                {{getVisibility}}
                {{getWind}}
                {{getSunriseAndSunset}}
              </pre>
            </div>
          </div>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import BaseImage from '@/components/BaseImage';

export default {
  name: 'WeatherCard',
  components: {
    BaseImage
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