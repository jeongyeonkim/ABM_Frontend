<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
          <Toolbar></Toolbar>
          <v-row>
            <v-flex>
            <p class="text-center font-weight-medium ma-5">Settings<v-icon color="#E65100">settings</v-icon></p>
            </v-flex>
          </v-row>
          <v-row>
            <v-btn flat block class="text-xs-center mb-5" @click="goAccount()" >My Account</v-btn>
            <v-btn flat block class="text-xs-center mb-5" >Log out</v-btn>
            <v-btn flat block class="text-xs-center mb-5" @click="dialog=true" >Register Store</v-btn>

            <v-dialog v-model="dialog" persistent max-width="500px">
            <v-card>
              <v-card-tiitle>
                <span class="headline">Register Store</span>
              </v-card-tiitle>
            </v-card>
            </v-dialog>
          </v-row>
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
  data () {
    return {
      dialog : false,
    }
  },
  components: {
    Toolbar,
  },
  methods: {
    goAccount(){
      this.$router.push({name: 'accountsetting'})
      }
      
  }
}
</script>