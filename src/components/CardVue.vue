<template>
  <v-container class="my-5">
    <v-layout row>
      <v-flex xs12 md3 class="mx-5" v-for="item in items" :key="item.id">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            :src="'assets/image/' + item.gambar"
          ></v-img>

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

            <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text> Reserve </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue";
import axios from "axios"
export default Vue.extend({
  name: "CardVue",
  data() {
    return {
        items: [] as any,
    }
  },
  mounted() {
      axios
      .get("http://localhost:3000/best-anime")
      .then((response) => 
        // handle success
        (this.items = response.data))
      .catch((error) =>
        // handle error
        console.log("gagal" + error)
      );
    }
});
</script>