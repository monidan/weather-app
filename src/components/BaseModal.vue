<template>
  <transition name="modal-animation">
    <div id="modal" v-if="$store.state.isError">
      <v-alert
        prominent
        dense
        type="error"
        class="text-subtitle-1"
        color="red"
        width="200"
      >
          <slot></slot>
      </v-alert>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Modal',

}
</script>
<style lang="scss">
  #modal{
    position: absolute;
    left: 5%;

    .v-alert{
      width: 100%!important; 
      display: flex;
      justify-content: center;
      font-size: 1rem!important;

      transform: translateY(10%);
    }
  }

  .modal-animation-enter-to, .modal-animation-leave{
    transform: translateY(10%);
  }

  .modal-animation-enter, .modal-animation-leave-to{
    transform: translateY(-120%);
  }

  .modal-animation-enter-active, .modal-animation-leave-active{
    transition: transform .5s ease-in-out;
  }
</style>