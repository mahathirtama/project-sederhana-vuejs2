<template>
  <v-container class="my-5">
    <v-layout row>
      <v-flex xs12 md3 class="mx-5" v-for="item in items" :key="item.id">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img height="250" :src="'assets/image/' + item.gambar"></v-img>
          <v-card-title>{{ item.nama }}</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>
            <div class="my-4">{{ item.harga }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn class="primary" :to="{ name: 'Items' }">
              Selengkapnya
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  name: "CardVue",
  data() {
    return {
      items: [] as any,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-anime")
      .then(
        (response) =>
          // handle success
          (this.items = response.data)
      )
      .catch((error) =>
        // handle error
        console.log("gagal" + error)
      );
  },
});
</script>