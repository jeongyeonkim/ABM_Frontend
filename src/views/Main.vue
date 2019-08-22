<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
          <Toolbar></Toolbar>
          <v-tabs v-model="tab" background-color="#E65100" dark icons-and-text centered>
            <v-tabs-slider></v-tabs-slider>
            <v-icon></v-icon>
            <v-tab href="#tab-1">
              인기 게시물
              <v-icon>favorite</v-icon>

            </v-tab>

            <v-tab href="#tab-2">
              최근 게시물
              
              <v-icon>history</v-icon>
            </v-tab>
            <v-btn icon href="/writeperson">
            <v-icon>create</v-icon>
            </v-btn>
          </v-tabs>
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
