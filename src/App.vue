<template>
  <v-app>
    <city-input></city-input>
    <v-divider></v-divider>
    <base-modal>
      {{$store.state.errorText}}
    </base-modal>
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
import BaseModal from './components/BaseModal.vue'

export default {
  name: 'App',

  components: {
    CityInput,
    WeatherCard,
    Footer,
    HalfCircleSpinner,
    BaseModal
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