<template>
  <div id="weather-card">
    <v-container>
      <v-col
        cols='12'
        md="12"
        lg='10'
        class="weather-card__column"
      >
        <v-row>
          <div class="weather-card__inner rounded-lg blue lighten-1">
            <div class="weather-card__inner_forecast_success">
              <div class="weather-card__inner_profile"
                   v-if="this.$store.state.isDataProvided"
              >
                <div class="weather-card__inner_profile__top">
                  <base-image
                    :iconId='getWeatherIconId'
                    v-if='this.$store.state.isDataProvided'
                  >
                  </base-image>
                  <div class="weather-card__profile_info">
                    <p class="weather-card__profile_city text-h4">
                      {{getCity}}
                    </p>
                    <p class="weather-card__profile_date subtitle-1">
                      {{formatDate}}
                    </p>
                    <p class="weather-card__profile_time">
                      {{formatTime}}
                    </p>
                  </div>
                </div>
                <v-divider
                  color='white'
                ></v-divider>
                <div class="weather-card__inner_profile__bottom">
                  <div class="weatehr-card__bottom__inner">
                    <div class="weather-card__bottom__inner_temperature">
                      Temperature
                      {{formatTemperature}}
                      <p>
                        °C
                      </p>
                    </div>
                    <div class="weather-card__bottom__inner_wind">
                      Wind Speed
                      {{formatWind}}
                      <p>
                        km/hour
                      </p>
                    </div>
                    <div class="weather-card__bottom__inner_sunrise">
                      Sunrise
                      {{getSunriseAndSunset.sunrise}}
                    </div>
                    <div class="weather-card__bottom__inner_sunset">
                      Sunset
                      {{getSunriseAndSunset.sunset}}
                    </div>
                    <div class="weather-card__bottom__inner_extensions">
                      <div class="weather-card__bottom__inner_humidity">
                        {{formatHumidity}}%
                      </div>
                      <div class="weather-card__bottom__inner_visibility">
                        {{formatVisibility}} km/hour
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="weather-card__inner_forecast_failure text-h3"
                   v-else
              >
                No City Provided
              </div>
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
  data() {
    return {
      kelvinsConst: 273.15
    }
  },
  methods: {
    formatMonth(monthId){
      const months = [
        'January', 
        'February', 
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
        ]
        return months[monthId]
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
      'getWeatherIconId',
      'getDate'
    ]),
    formatDate(){
      const date = this.getDate;
      return this.formatMonth(date.getMonth()) + ' ' + date.getDate() + ' ' + date.getFullYear();
    },
    formatTime(){
      const date = this.getDate;
      return date.getHours() + ':' + date.getMinutes() 
    },
    formatTemperature(){
      return (+this.getMainForecast.temp - this.kelvinsConst).toFixed(0)
    },
    formatWind(){
      return (+this.getWind.speed * 3600/1000).toFixed(1)
    },
    formatHumidity(){
      return this.getMainForecast.humidity;
    },
    formatVisibility(){
      return (this.getVisibility / 1000).toFixed(0)
    }
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

    padding: 1.5rem 2rem;

    &_forecast_failure{
      margin: 0 auto;
      padding: 5rem 0;
      text-align: center;
    }

    &_profile__bottom{
      
      & > div{
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>