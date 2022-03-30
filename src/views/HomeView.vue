<template>
     <div class="container">
       <navbar-vue></navbar-vue>
       <v-h1 class="display-3 subheading grey--text">Home</v-h1>
      <card-vue-vue></card-vue-vue>
     </div>
</template>

<script lang="ts">
import NavbarVue from '../components/NavbarVue.vue'
import CardVueVue from '@/components/CardVue.vue'
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HomeVue',

    components: {
      NavbarVue,
      CardVueVue

    },
  })
</script>
