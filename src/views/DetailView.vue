<template>
  <div>
    <navbar-vue></navbar-vue>
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 md3 class="mx-5">
          <v-card class="mx-auto my-12" max-width="374">
            <v-img height="250" :src="'assets/image/' + item.gambar"></v-img>
            <v-card-title>{{ item.nama }}</v-card-title>
            <v-card-text>
              <div class="my-4 text-subtitle-1">Rp. {{item.harga}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="warning"
                :to="{ name: 'Edit', params: { id: item.id } }"
              >
                Edit
              </v-btn>
              <v-btn
                class="primary"
                :to="{name: 'Items'}"
              >
                Back
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import NavbarVue from "@/components/NavbarVue.vue";
import axios from "axios";
export default Vue.extend({
  name: "DetailViewVue",
  components: {
    NavbarVue,
  },
  data() {
    return {
      item: [] as any,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/anime/" + this.$route.params.id)
      .then((res) => (this.item = res.data))
      .catch((err) => console.log(err));
  },
});
</script>