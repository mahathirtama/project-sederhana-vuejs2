<template>
  <div class="container">
    <navbar-vue></navbar-vue>
    <v-h1 class="subheading grey--text">Data</v-h1>
    <v-container class="my-5">
      <v-card flat class="pa-5" v-for="data in datas" :key="data.id">
        <v-layout row wrap>
          <v-flex xs12 md6 :class="`pa-3 tipe ${data.tipeProduct}`">
            <div class="caption grey--text">Nama Product</div>
            <div>{{ data.namaProduct }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Tipe Product</div>
            <v-chip
              small
              color="red"
              :class="`${data.tipeProduct} white--text caption my-2`"
              >{{ data.tipeProduct }}</v-chip
            >
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Harga</div>
            <div>{{ data.harga }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Status</div>
            <v-btn
              color="warning"
              :to="{ name: 'DataEdit', params: { id: data.id } }"
              >Edit</v-btn
            >
            <v-btn color="red" @click="Delete(data.id)">Delete</v-btn>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import NavbarVue from "@/components/NavbarVue.vue";
export default Vue.extend({
  name: "DataViewVUe",
  components: {
    NavbarVue,
  },
  data() {
    return {
      datas: [] as any,
    };
  },
  methods: {
    Delete(data: any) {
      axios.delete("http://localhost:3000/keranjangs/" + data).then(() => {
          this.$router.go(0)
        alert("Data Berhasil Hapus");
      });
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((res) => {
        this.datas = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
</script>

<style>
.tipe.anime {
  border-left: 4px solid #3cd1c2;
}
.tipe.non-anime {
  border-left: 4px solid #c41c1c;
}

.chip.anime {
  background: #3cd1c2;
}
.chip.non-anime {
  background: #c41c1c;
}
</style>