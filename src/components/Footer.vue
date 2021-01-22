<template>
  <v-footer>
    <v-container>
      <v-col
        cols='12'
        lg='12'
      >
        <v-row
          justify='center'
        >
          <v-card
            flat
            tile
            color='transparent'
          >
            <v-card-text
              class="blue--text"
            >
              {{ new Date().getFullYear() }} - <strong>Copyrighted by <a href="https://github.com/monidan" target="_blank">Daniel Horokhov</a> ©</strong> 
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style lang="scss">
  
</style>