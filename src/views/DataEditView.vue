<template>
  <div class="container">
    <navbar-vue></navbar-vue>

    <v-container class="mt-7">
      <v-form v-on:submit.prevent="Update">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-text-field
              label="Nama Product"
              border="right"
              color="primary"
              prominent
              v-model="dataEdit.namaProduct"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              label="Tipe Product"
              border="right"
              color="primary"
              prominent
              v-model="dataEdit.tipeProduct"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs12 md6>
            <v-text-field
              type="number"
              label="Harga"
              v-model="dataEdit.harga"
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
  name: "DataEditViewVue",
  components: {
    NavbarVue,
  },
  data() {
    return {
      dataEdit: {} as any,
    };
  },
  methods: {
    setData(data: any) {
      this.dataEdit = data;
    },
    Update() {
      axios
        .put(
          "http://localhost:3000/keranjangs/" + this.dataEdit.id,
          this.dataEdit
        )
        .then(() => {
          this.$router.push({ path: "/data" });
          alert("Data Berhasil diubah");
        })
        .catch((err) => {
          console.log("gagal" + err);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs/" + this.$route.params.id)
      .then((res) => {
        this.setData(res.data);
      })
      .catch((err) => {
        console.log("gagal" + err);
      });
  },
});
</script>