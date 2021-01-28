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
          <div class="weather-card__inner rounded-lg blue lighten-1"
               :class="{'weather-card__night': $vuetify.theme.dark}">
            <div class="weather-card__inner_forecast_success">
              <transition name="weather-card__animation">
                <div class="weather-card__inner_profile"
                    v-if="this.$store.state.isDataProvided && !this.$store.state.isLoading"
                    key='weather-card__success'
                >
                    <div class="weather-card__inner_profile__top">
                      <base-image
                        :iconId='getWeatherIconId'
                        v-if='this.$store.state.isDataProvided'
                      >
                      </base-image>
                      <div class="weather-card__profile_info">
                        <h4 class="weather-card__profile_city">
                          {{getCity}}
                        </h4>
                        <h5 class="weather-card__profile_date">
                          {{formatDate}}
                        </h5>
                        <p class="weather-card__profile_time">
                          {{formatTime}}
                        </p>
                      </div>
                    </div>
                    <v-divider
                      color='white'
                    ></v-divider>
                    <div class="weather-card__inner_profile__bottom">
                      <div class="weather-card__bottom__inner">
                        <div class="weather-card__bottom__inner_temperature">
                          Temperature
                          <p>
                            {{formatTemperature}}<span>°C</span>
                          </p>
                        </div>
                        <div class="weather-card__bottom__inner_wind">
                          Wind Speed
                          <p>
                            {{formatWind}} <span>km/hour</span>
                          </p>
                        </div>
                        <div class="weather-card__bottom__inner_sunrise">
                          Sunrise
                          <p>
                            {{getSunriseAndSunset.sunrise}}
                          </p>
                        </div>
                        <div class="weather-card__bottom__inner_sunset">
                          Sunset
                          <p>
                            {{getSunriseAndSunset.sunset}}  
                          </p>
                        </div>
                        <div class="weather-card__bottom__inner_extensions">
                          <div class="weather-card__bottom__inner_humidity">
                            Humidity
                            <p>
                              {{formatHumidity}} <span>%</span>
                            </p>
                          </div>
                          <div class="weather-card__bottom__inner_visibility">
                            Visibility
                            <p>
                              {{formatVisibility}} <span>km/hour</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="weather-card_loading"
                    v-else-if="this.$store.state.isLoading"
                    key="weather-card__loading"
                >
                    <slot></slot>
                </div>
                <div class="weather-card__inner_forecast_failure"
                    v-else
                    key="weather-card__no-data"
                >
                  <h3>No City Provided</h3>
                </div>
              </transition>
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
    BaseImage,
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
      return date.getHours() + ':' + (Number(date.getMinutes()) >= 10 ? date.getMinutes() : '0' + date.getMinutes())
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
  },
}
</script>
<style lang="scss">
  .weather-card__column{
      margin: 0 auto!important;
  }

  .weather-card__night{
    background: -webkit-linear-gradient(-45deg, #595962, #32326d)!important;
  }

  .weather-card__inner{
    position: relative;
    width: 100%;
    height: 650px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background: -webkit-linear-gradient(-45deg, #85c5fa, #42A5F5);

    padding: 1.5rem 2.5rem;

    font-family: 'Lato', sans-serif!important;

    box-shadow: 0 0 15px 1px rgba(0, 0, 0, .3);

    & > div{
      width: 100%;
      height: 100%!important;
      color: white;

      h4{
        line-height: 1;
        padding: 0;
        margin: 0;
        font-size: 3.5rem;
      }
      h5{
        line-height: 1.5;
        font-size: 2rem;
      }
      p{
        font-size: 2rem;
        line-height: 1;
      }
    }

    &_forecast_success{
      overflow: hidden;
    }

    &_forecast_failure{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      h3{
        font-weight: 400;
        font-size: 4rem;
      }
    }

    &_profile__top{ 
      display: flex;
      column-gap: 1rem;
      padding-bottom: 13rem;
      align-items: center;
      border-radius: 8px;
      overflow: hidden;

      p{
        margin: 0 
      }
    }

    &_profile__bottom{
      padding: 1.5rem 0;

      .weather-card__bottom__inner{
        font-size: 2rem;

        & > div{
          display: flex;
          flex-direction: column;
          align-items: center;

          p{
            margin: auto 0;
            font-size: 5rem;
          }

          span{
            font-size: 2rem;
          }
        }
        
        &_temperature{

          p{
            display: flex;
            font-size: 10rem;
          }
        }

        &_sunset, &_sunrise{

          p{
            font-size: 4rem!important;
          }
        }

        &_extensions{
          display: flex;
          row-gap: 1rem;

          & > div{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
          
          p{
            font-size: 2.5rem!important;
          }
        }
      } 

      & > div{
        display: flex;
        justify-content: space-around;
      }
    }


  }

  // loader spinner

  .weather-card_loading{
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;

    & > div{
      margin: 0 auto;
    }
  }

  // 'weather card loading' transition

  .weather-card__animation-enter-active, .weather-card__animation-leave-active {
    transition: opacity .5s ease-in-out;
  }
  .weather-card__animation-enter, .weather-card__animation-leave-to{
    opacity: 0;
  }
</style>