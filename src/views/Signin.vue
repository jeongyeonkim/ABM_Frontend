<template>
<div id="app">
<v-app id="inspire">
    <v-container fluid grid-list-md>
      <v-layout align-center justify-center>
        <p class="text-md-center">LOGO</p>
      </v-layout>
      <v-layout class = "mx-10 my-10" align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-text>로그인</v-text>
          <v-text-field v-model="id" label="아이디" clearable ></v-text-field>
          <v-text-field type="password" v-model="password" label="비밀번호" clearable></v-text-field>
          <v-btn block outlined color="#E65100" v-on:click="signin">로그인</v-btn>
          <v-btn block outlined color="#E65100" class="my-4" href="/signup">가입하기</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
</v-app>
</div>
</template>

<script>
  export default {
  name: 'default',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    signin(){
      this.$http.post('http://localhost:4500/APi/LoginApi', { email:this.id, password:this.password }
            ).then(response => {
                if(response.data == 'Email and password does not match'){
                alert("입력한 아이디 또는 비밀번호가 올바르지 않습니다.")
              }else if(response.data == 'Email does not exists'){
                alert("입력한 아이디가 존재하지 않습니다.")
              }else{
                alert("환영합니다.")
                if (response.status === 200 && 'token' in response.body) {
                  this.$session.start()
                  this.$session.set('jwt', response.data.token)
                  this.$session.set('id', response.data.id)
                  this.$session.set('_id', response.data._id)
                  this.$http.headers.common['Authorization'] = 'Bearer ' + response.body.token
                  this.$router.push('/main')
            }
              }
            }).catch(e => {
              // eslint-disable-next-line
               console.log('error : ', e) 
            })
    }
  }
}
</script>