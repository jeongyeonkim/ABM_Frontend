<template>
<div id="app">
<v-app id="inspire">
    <v-container fluid grid-list-md>
      <v-layout align-center justify-center>
        <p class="text-md-center">LOGO</p>
      </v-layout>
      <v-layout class = "mx-10 my-10" align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-text><v-icon>account_box</v-icon>    회원가입</v-text>

          <v-flex row>
          <v-text-field class="mx-2" v-model="id" label="아이디" clearable name="inputId"></v-text-field>
          <v-btn>중복확인</v-btn> </v-flex>

          <v-text-field v-model="password" label="비밀번호" clearable name="inputPwd"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
             @click:append="show1 = !show1"></v-text-field>

          <v-text-field v-model="password_check" label="비밀번호 확인" clearable name="inputPwd_check"
            :append-icon="show2 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
             @click:append="show2 = !show2"></v-text-field>

          <v-text-field v-model="name" label="이름" clearable name="inputName"></v-text-field>
          <v-flex row>
          <v-text-field class="mx-2" v-model="pet_num" label="반려동물 등록번호" clearable name="inputPatnum"></v-text-field>
          <v-btn>중복확인</v-btn> </v-flex>
          
          <v-text-field v-model="nickname" label="닉네임" clearable name="inputNick"></v-text-field>
          <v-select :items="items" label="통신사" ></v-select>
          <v-text-field v-model="phone_num" label="핸드폰 번호" clearable name="inputPhone"></v-text-field>
          <v-btn block outlined color="#E65100" class="my-4"
            v-on:click="signupCheck">가입하기</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
</v-app>
</div>
</template>

<script>
  export default {
    data: () => ({
      items: ['LGU+', 'KT', 'SKT'],
      show1: false,
      show2: false,
      rules: {
          required: value => !!value || '비밀번호를 입력해주세요.',
          min: v => v.length >= 8 || '최소 8자 이상 입력해주세요.'
        }
    }),
    methods:{
      signupCheck:function(){
        if(this.inputPwd === this.inputPwd_check){
          alert("가입이 완료되었습니다.")
          document.location.href="/"
        }else{
          alert("비밀번호를 다시 확인해주세요.")
        }
      }
    }
  }
</script>