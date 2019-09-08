<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
          <Toolbar></Toolbar>
          <v-card color="#E65100">
            <v-row>
             <v-col>
               <v-icon color="#FFF3E0" right>storefront</v-icon>
              </v-col>
              <v-col></v-col>
              <v-col><span color="#FFF3E0">STORE</span></v-col>
              <v-col></v-col>
              <v-col></v-col>
            </v-row>
          </v-card>
          <StoreCard></StoreCard>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue';
import StoreCard from '../components/StoreCard.vue';

export default {
  name: 'default',
  data () {
    return {
    }
  },
  components: {
    Toolbar,
    StoreCard,
  },
  methods: {}
}
</script>