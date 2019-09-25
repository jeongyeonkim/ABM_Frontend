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
              <v-toolbar color="#E65100" dark>
                <v-toolbar-title>Register Store</v-toolbar-title>
              </v-toolbar>
              <v-flex class="mx-4 my-5">
              <v-img max-width="500" max-height="300" 
                src="https://placeimg.com/500/300/animals"
                aspect-ratio="1" class="grey lighten-2">
              <v-card-text style="height: 270px; width: 450px; position: relative">
              <v-btn absolute dark fab bottom right color="#E65100">
                <v-icon>add</v-icon>
              </v-btn>
          </v-card-text>
          </v-img>
          <v-file-input
            :rules="memorysize"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="사진을 추가해주세요."
            prepend-icon="mdi-camera"
            label="이미지 첨부"></v-file-input>
          </v-flex>
          <v-row justify="center">
            <v-text-field
            label= "Store Name"
            required></v-text-field>
          </v-row>
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