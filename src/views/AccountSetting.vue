<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
          <Toolbar></Toolbar>
          <v-flex class="my-3 mx-3">
              <p class="text-center">계정 관리</p>
              <p>아이디 : ㅇㄹㅁㄴㄹㅇㅁㄴ</p>

              <v-text-field v-model="userpwd" label="비밀번호" clearable name="inputPwd"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"></v-text-field>

              <v-text-field label="비밀번호 확인" clearable name="inputPwd_check"
                :append-icon="show2 ? 'visibility' : 'visibility_off'"
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'"
                @click:append="show2 = !show2"></v-text-field>

              <v-text-field v-model="username" label="이름" clearable name="inputName"></v-text-field>

              <p>반려동물 등록번호 : </p>
          
              <v-text-field v-model="usernick" label="닉네임" clearable name="inputNick"></v-text-field>

              <v-select :items="items" label="통신사" v-model="usercarriar"></v-select>

              <v-text-field v-model="userphone" label="핸드폰 번호" clearable name="inputPhone"></v-text-field>

              <v-btn block outlined color="#E65100" class="my-4"
                v-on:click="accountCheck">수정하기</v-btn>
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
        userpwd: 'passsssword',
        username: 'namename',
        usernick: 'nickname',
        usercarriar: 'KT',
        userphone: '000-0000-0000',

        items: ['LGU+', 'KT', 'SKT'],
        show1: false,
        show2: false,
        rules: {
          required: value => !!value || '비밀번호를 입력해주세요.',
          min: v => v.length >= 8 || '최소 8자 이상 입력해주세요.'
        }

    }
  },
  components: {
    Toolbar
  },
  methods: {
      accountCheck:function(){
        if(this.inputPwd === this.inputPwd_check){
          alert("수정이 완료되었습니다.")
          //이거 클릭 후 수정해야됨.
          document.location.href="/"
        }else{
          alert("비밀번호를 다시 확인해주세요.")
        }
      }
  }
}
</script>
