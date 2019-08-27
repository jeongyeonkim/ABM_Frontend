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
              <v-icon color="#FFF3E0" x-small center>person_pin</v-icon><span class="caption" color="#FFF3E0">100</span>
              </v-col>
              <v-col></v-col>
              <v-col>
              <span>GROUP</span>
              </v-col>
              <v-col></v-col>
              <v-col>
              <v-btn text small right href="/writeperson"><v-icon color="#FFF3E0">create</v-icon></v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-card class="ma-0 pa-0"  :elevation="10">
            <v-img height="80" width="350"
              src="https://placeimg.com/350/80/animals" ></v-img>
          </v-card>
          <FeedCard></FeedCard>
          </v-flex>
        </v-layout>
     </v-container>
    </v-content>
  </v-app>
</div>
</template>


<script>
import Toolbar from '../components/Toolbar.vue';
import FeedCard from '../components/FeedCard.vue';

export default {
  name: 'default',
  data () {
    return {
    }
  },
  components: {
    Toolbar,
    FeedCard
  },
  methods: {}
}
</script>