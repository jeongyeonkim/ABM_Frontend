<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
          <Toolbar></Toolbar>
          <v-icon>settings_applications</v-icon>Settings
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>


<script>
import Toolbar from '../components/Toolbar.vue';

export default {
  name: 'default',
  data () {
    return {
    }
  },
  components: {
    Toolbar,
  },
  methods: {}
}
</script>