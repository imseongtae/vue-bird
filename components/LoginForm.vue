<template>
  <v-container>
    <v-card>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-container>
          <v-text-field
            v-model="email"
            label="이메일"
            type="email"
            :rules="emailRules"
            required
          />
          <v-text-field
            v-model="password"
            label="비밀번호"
            type="password"
            :rules="passwordRules"
            required
          />
          <v-btn color="#B5E2DF" type="submit" :disabled="!valid">로그인</v-btn>
          <v-btn nuxt to="/signup">회원가입</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      valid: false,
      email:'',
      password: '',
      emailRules: [
        v => !!v || '이메일을 입력해주세요.',
        v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.'
      ],
      passwordRules: [
        v => !!v || '비밀번호를 입력해주세요.'
      ]
    }
  },
}
</script>

<style>

</style>