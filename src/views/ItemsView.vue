<template>
    <div class="container">
       <navbar-vue></navbar-vue>
       <v-h1 class="display-3 subheading grey--text">All Items</v-h1>
       <v-container>
            <items-all-vue></items-all-vue>
       </v-container>
       
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavbarVue from '@/components/NavbarVue.vue'
import ItemsAllVue from '@/components/ItemsAll.vue'
export default Vue.extend({
    name: 'ItemsViewVue',
    components: {
        NavbarVue,
        ItemsAllVue
    }
    
})
</script>