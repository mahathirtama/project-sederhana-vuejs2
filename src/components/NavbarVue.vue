<template>
  <nav>
    <v-toolbar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Tama</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <router-link to="/"><span>cart</span></router-link>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app class="red" v-model="drawer">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="assets/image/tama.png" alt="">
          </v-avatar>
        </v-flex>
        <p class="white--text subheading mt-1">Mahathirtama Ahmad</p>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
             <v-icon x-large color="white">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavbarVue",

  data: () => ({
    drawer: true,
    links: [
      {icon: 'mdi-home', text: 'Home', route: '/'},
      {icon: 'mdi-dialpad', text: 'Items', route: '/items'},
      {icon: 'mdi-dialpad', text: 'Data', route: '/data'},
      {icon: 'mdi-dialpad', text: 'Create', route: '/create'}
    ]
  }),
});
</script>
