<template>
  <div class="container">
    <navbar-vue></navbar-vue>

    <v-container class="mt-7">
      <v-form v-on:submit.prevent="CreateDataBaru">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-text-field
              label="Nama Product"
              border="right"
              color="primary"
              prominent
              v-model="createData.namaProduct"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-select
          :items="item"
          label="Tipe Anime"
          v-model="createData.tipeProduct"
        ></v-select>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs12 md6>
            <v-text-field
              type="number"
              label="Harga"
              v-model="createData.harga"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-btn color="primary" type="submit">Create</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavbarVue from "@/components/NavbarVue.vue";
import axios from "axios";
export default Vue.extend({
  name: "CreateViewVue",
  components: {
    NavbarVue,
  },
  data() {
    return {
      createData: {} as any,
    };
  },
  computed: {
    item() {
      const item: any = ['anime', 'non-anime'] 

      return item
    }
  },
  methods: {
    CreateDataBaru() {
     axios
     .post('http://localhost:3000/keranjangs', this.createData).then(() => {
          this.$router.push({path: "/data"})
          alert('Berhasil Di Tambahkan')
        })
        .catch(() => {
          alert("Gagal Di Tambahkan")
        });
    },
  },
});
</script>