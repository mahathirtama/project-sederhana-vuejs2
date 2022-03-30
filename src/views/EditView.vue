<template>
<div class="container">
    <navbar-vue></navbar-vue>
    <v-container>
        <v-img
            height="250"
            width="250"
            :src="'assets/image/' + dataEdit.gambar"
          ></v-img>
    <v-form v-on:submit.prevent="Update">
        <v-text-field label="Nama" v-model="dataEdit.nama"></v-text-field>
        <v-text-field label="Harga" v-model="dataEdit.harga"></v-text-field>
        <v-btn type="submit" class="success mx-5">Edit</v-btn>
        <v-btn class="primary" :to="{name: 'Items'}">Back</v-btn>
    </v-form>
     </v-container>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import NavbarVue from '@/components/NavbarVue.vue'
export default Vue.extend({
    name: 'EditViewVue',
    components: {
        NavbarVue
    },
    data() {
      
    return {
        dataEdit: {} as any
    }
  },
  methods: {
    setData(data:any) {
      this.dataEdit = data
    },
    Update() {
        axios.put("http://localhost:3000/anime/" + this.dataEdit.id, this.dataEdit)
      .then(() => {
           this.$router.push({path: "/items"})
        alert("Data Berhasil diubah")
      })
      .catch((err) => {
        console.log("gagal" + err);
      });
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/anime/" + this.$route.params.id)
      .then((res) => {
        this.setData(res.data);
      })
      .catch((err) => {
        console.log("gagal" + err);
      });
  },
    
})
</script>