<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
          <Toolbar></Toolbar>
          <v-toolbar color = "#E65100" dark flat dense floating>
            <v-text-field class = "mx-4" flat hide-details label = "Search" prepend-inner-icon = "search" single-line solo-inverted></v-text-field>
          </v-toolbar>
          <v-tabs v-model="tab" background-color="#E65100" dark icons-and-text centered grow>
            <v-tabs-slider></v-tabs-slider>
                  <v-tab href="#tab-1">
                    My Group
                  <v-icon>group</v-icon>
                  </v-tab>
                  <v-tab href="#tab-2">
                    Add new Group
                  <v-icon>group_add</v-icon>
                  </v-tab>
          </v-tabs>

          <v-flex>
          <v-card elevation="5">
          <v-col>
          <GroupCard></GroupCard>
          <GroupCard></GroupCard>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn fab color = "#E65100" v-on="on" dark x-small bottom right absolute>
                <v-icon>add</v-icon>
            </v-btn>
            </template>
            <v-card>
              <v-toolbar color="#E65100" dark>
                <v-icon>pets</v-icon>
                <v-toolbar-title>Make your group!</v-toolbar-title>
              </v-toolbar>
              <v-flex class="mx-4 my-5">
                <v-img max-width="500" max-height="300" 
                  src="https://placeimg.com/500/300/animals"
                  aspect-ratio="1" class="grey lighten-2">
                  
                </v-img>
              <v-file-input
                :rules="memorysize"
                class="mx-3"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="사진을 추가해주세요."
                prepend-icon="mdi-camera"
                label="이미지 첨부"></v-file-input>

              <v-flex row>
              <v-text-field v-model="groupname" class="mx-20" label="Group Name" clearable name="Input GroupName"></v-text-field>
              <v-btn>중복확인</v-btn> </v-flex>

              <v-radio-group v-model="row" row>
                <v-radio label="Public" value="radio-1"></v-radio>
                <v-radio label="Private" value="radio-2"></v-radio>
              </v-radio-group>

              <v-combobox v-model="chips" chips clearable label="Tag를 입력하세요" multiple solo deletable-chips>
              <v-chip v-bind="attrs" close ></v-chip></v-combobox>

              <v-textarea counter label="내용을 입력 해주세요." :rules="textsize" clearable class="my-4"></v-textarea>
              <v-btn outlined color="#E65100" class="my-4" href="/groupmain">Finish</v-btn>
              </v-flex>

            </v-card>
          </v-dialog>
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
import GroupCard from '../components/GroupCard.vue';

  export default {
    data: () => {
      return {
        dialog: false,
        switch1: true,
      }
    },
    components: {
      Toolbar,
      GroupCard
    },
    rules: {
          memorysize: value => !value || value.size < 2000000 || '최대 2MB',
          textsize: [v => v.length <= 25 || 'Max 25 characters']
    },
  }
</script>
