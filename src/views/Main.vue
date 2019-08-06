
<template>
<div id="app">
<v-app id="inspire">
  <v-content>
    <v-container fluid grid-list-md>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
        <Toolbar></Toolbar>
        <v-toolbar color="primary" id="toolbar">
              <v-btn @click="$router.go(-1)" icon>
                <v-icon>arrow_back</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-icon>person</v-icon>
        </v-toolbar>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</v-app>
</div>
</template>


<script>
export default {
  name: 'default',
  data () {
    return {
    }
  },
  methods: {}
}
</script>


<style scoped>
</style>