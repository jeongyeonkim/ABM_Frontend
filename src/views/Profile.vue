<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
          <Toolbar></Toolbar>
              <v-divider class="my-5"></v-divider>
              <!-- user 정보 (프로필 사진, 사용자 아이디, 소개말)-->
                  <v-list-item two-line class="mx-3">
                    <v-avatar size="80"><v-img  src="https://placeimg.com/500/300/animals"></v-img></v-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="text-center"><v-btn icon><v-icon>chat</v-icon></v-btn>userid</v-list-item-title>
                            <v-list-item-subtitle class="text-center">주절주절,,,</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                <v-divider class="my-5"></v-divider>

          <!-- 게시글 -->
          <template>
            <v-row>
              <v-col >
                  <v-container fluid>
                    <v-row>
                      <v-col
                        v-for="n in 9"
                        :key="n"
                        class="d-flex child-flex"
                        cols="4"
                      >
                        <v-card flat tile class="d-flex">
                          <v-img
                            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                            aspect-ratio="1"
                            class="grey lighten-2"
                          >
                            <template v-slot:placeholder>
                              <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                              >
                               <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                              </v-row>
                            </template>
                          </v-img>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
              </v-col>
            </v-row>
          </template>
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
  methods: {}
}
</script>
