<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
          <Toolbar></Toolbar>
          <v-flex class="my-3">
          <v-card class="py-1 px-2" :elevation="5">
            <v-col>
              <p class="text-center">userid</p>
              <v-img max-width="500" max-height="300"
                    src="https://placeimg.com/500/300/animals"
                    aspect-ratio="1" class="grey lighten-2 my-2">
                </v-img>
                <v-row class="mx-3">
                    <v-row class="caption">#text</v-row>
                    <v-row class="caption">2019년 08월 01일</v-row>
                </v-row>
                <p class="caption my-0">본문 내용</p>
                <v-item v-slot:default="{ active, toggle }">
                <v-btn icon dark @click="toggle">
                    <v-icon color="#E65100">
                        {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
                </v-btn>
                </v-item>
                <v-row class="mx-3 my-2">
                    <v-row class="caption">id : comment</v-row>
                    <v-row class="overline text-end grey--text text-end">2019년 08월 01일</v-row>
                </v-row>
                <v-row>
                    <v-text-field class="caption" height="15" label="댓글쓰기"></v-text-field>
                    <v-btn icon max-height="30" max-width="30"><v-icon size="20">reply</v-icon></v-btn>
                </v-row>
            </v-col>
          </v-card>
          </v-flex>
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
    Toolbar
  },
  methods: {
  }
}
</script>
