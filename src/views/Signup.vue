
<template>
<div id="app">
<v-app id="inspire">
    <v-container fluid grid-list-md>
      <v-layout align-center justify-center>
        <p class="text-md-center">LOGO</p>
      </v-layout>
      <v-layout class = "mx-5 my-10">
        <v-flex xs12 sm6>
          <v-text><v-icon>account_box</v-icon>    회원가입</v-text>

          <v-flex row>
          <v-text-field class="mx-2" v-model="id" label="아이디" clearable></v-text-field>
          <v-btn>중복확인</v-btn> </v-flex>

          <v-text-field type="password" v-model="password" label="비밀번호" clearable></v-text-field>
          <v-text-field type="password" v-model="password_check" label="비밀번호 확인" clearable></v-text-field>
          <v-text-field v-model="name" label="이름" clearable></v-text-field>
          
          <v-flex row>
          <v-text-field class="mx-2" v-model="pet_num" label="반려동물 등록번호" clearable></v-text-field>
          <v-btn>중복확인</v-btn> </v-flex>
          
          <v-text-field v-model="nickname" label="닉네임" clearable></v-text-field>
          <v-select :items="items" label="통신사"></v-select>
          <v-text-field v-model="phone_num" label="핸드폰 번호" clearable></v-text-field>
          <v-btn block outlined color="dark">가입하기</v-btn>
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
    }),
  }
</script>