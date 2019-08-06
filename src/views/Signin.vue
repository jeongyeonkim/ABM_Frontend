<template>
<div id="app">
<v-app id="inspire">
    <v-container fluid grid-list-md>
      <v-layout align-center justify-center>
        <p class="text-md-center">LOGO</p>
      </v-layout>
      <v-layout class = "mx-5 my-10" align-center justify-center>
        <v-flex xs12 sm6>
          <v-text>로그인</v-text>
          <v-text-field v-model="id" label="아이디" clearable></v-text-field>
          <v-text-field type="password" v-model="password" label="비밀번호" clearable></v-text-field>
          <v-btn block outlined color="dark">로그인</v-btn>
          <v-btn block outlined color="dark" flat href="/signup" class="my-2">가입하기</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
</v-app>
</div>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>