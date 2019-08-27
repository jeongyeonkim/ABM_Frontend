<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
          <Toolbar></Toolbar>
          <NoticeCard></NoticeCard>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue';
import NoticeCard from '../components/NoticeCard.vue';

export default {
  name: 'default',
  data () {
    return {
    }
  },
  components: {
    Toolbar,
    NoticeCard
  },
  methods: {}
}
</script>