<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>회원 가입</v-subheader>
          <!-- vuetify에서 제공해주는 기능 valid -->
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-text-field
              v-model="email"
              label="email"
              type="email"
              :rules="emailRules"
              required
            />
            <v-text-field
              v-model="password"
              label="password"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-text-field
              v-model="checkPassword"
              label="check password"
              type="password"
              :rules="passwordCheckRules"
              required
            />
            <v-text-field
              v-model="nickname"
              label="nickname"
              type="nickname"
              :rules="nicknameRules"
              required
            />
            <v-checkbox
              v-model="terms"
              required
              :rules="[v => !!v || '약관에 동의해야 합니다.']"
              label="ham에게 약속합니다. 더 나은 사람이 되기 위해 노력하자"
            />
            <v-btn type="submit" :disabled="!valid" color="#B5E2DF">가입하기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      checkPassword: '',
      nickname: '',
      terms: false,
      emailRules: [
        v => !!v || '이메일은 필수입니다.',
        v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.'
      ],
      nicknameRules: [
        v => !!v || '닉네임은 필수입니다.'
      ],
      passwordRules: [
        v => !!v || '비밀번호는 필수입니다.'
      ],
      passwordCheckRules: [
        v => !!v || '비밀번호 확인은 필수입니다.',
        v => v === this.password || '비밀번호가 일치하지 않습니다.',
      ],
    }
  },
  head() {
    return {
      title: '회원가입'
    }
  },
  methods: {
    onSubmitForm() {
      console.log('onSubmitForm');
      if (this.$refs.form.validate()) {
        alert('회원가입 시도')
      } else {
        alert('입력된 값이 유효하지 않습니다.')
      }
      console.log(this.valid);
    }
  },
}
</script>

<style>

</style>