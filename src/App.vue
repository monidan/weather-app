<template>
  <v-app>
    <city-input></city-input>
    <v-divider></v-divider>
    <v-main>
      <weather-card>

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

export default {
  name: 'App',

  components: {
    CityInput,
    WeatherCard,
    Footer
  },
}
</script>
