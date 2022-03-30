<template>
    <v-container class="my-5">
    <v-layout row>
      <v-flex xs12 md3 class="mx-5" v-for="item in items" :key="item.id">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img
            height="250"
            :src="'assets/image/' + item.gambar"
          ></v-img>
          <v-card-title>{{ item.nama }}</v-card-title>
          <v-card-text>
            <div class="my-4 text-subtitle-1">Rp. {{item.harga}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn class="warning"  :to="{ name: 'Edit', params: { id: item.id } }"> 
              Edit
         </v-btn>
          <v-btn class="primary"  :to="{ name: 'Detail', params: { id: item.id } }"> 
              Detail
         </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios"
export default Vue.extend({
    name: 'ItemsViewVue',
    data() {
    return {
        items: [] as any,
    }
  },
  mounted() {
      axios
      .get("http://localhost:3000/anime")
      .then((response) => 
        // handle success
        (this.items = response.data))
      .catch((error) =>
        // handle error
        console.log("gagal" + error)
      );
    }
})
</script>