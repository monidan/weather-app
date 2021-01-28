<template>
  <v-app>
    <city-input></city-input>
    <v-divider></v-divider>
    <v-main>
      <weather-card>
        <HalfCircleSpinner 
          :animation-duration='1000'
        />
      </weather-card>
    </v-main>
    <v-divider></v-divider>
    <Footer />
  </v-app>
</template>

<script>
import CityInput from '@/components/CityInput.vue'
import WeatherCard from '@/components/WeatherCard.vue'
import Footer from '@/components/Footer.vue'

import {HalfCircleSpinner} from 'epic-spinners';

export default {
  name: 'App',

  components: {
    CityInput,
    WeatherCard,
    Footer,
    HalfCircleSpinner
  },

  beforeCreate(){
    const date = new Date();

    if(date.getHours() <= 18 && date.getHours() >= 6){
      this.$vuetify.theme.dark = false
    } else {
      this.$vuetify.theme.dark = true
    }
  }
}
</script>