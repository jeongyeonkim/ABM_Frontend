<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid grid-list-md >
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
          <Toolbar></Toolbar>
          <v-flex class="mx-4 my-3">
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
          <v-text-field class="mx-2" v-model="id" label="Tag" clearable></v-text-field>
          <v-textarea counter label="내용을 입력 해주세요." :rules="textsize" clearable class="my-4"></v-textarea>
          <v-btn block outlined color="#E65100" class="my-4">공유하기</v-btn>
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
  data: () => ({
      rules: {
          memorysize: value => !value || value.size < 2000000 || '최대 2MB',
          textsize: [v => v.length <= 25 || 'Max 25 characters']
        }
    }),
  components: {
    Toolbar
  },
  methods: {}
}
</script>