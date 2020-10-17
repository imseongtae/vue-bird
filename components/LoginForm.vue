<template>
  <v-container v-if="!me">
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
          <v-btn color="#B5E2DF" type="submit" :disabled="!valid">
            로그인
          </v-btn>
          <v-btn nuxt to="/signup">
            회원가입
          </v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
  <v-container v-else>
    <v-card>
      <v-container>
        {{ me.nickname }}님 로그인되었습니다.
        <v-btn @click="onLogOut">
          로그아웃
        </v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      nickname: '',
      emailRules: [
        v => !!v || '이메일을 입력해주세요.',
        v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
      ],
      passwordRules: [v => !!v || '비밀번호를 입력해주세요.'],
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
  },
  methods: {
    onLogOut() {
      this.$store.dispatch('users/logOut');
    },
    async onSubmitForm() {
      // validate true이면 폼이 유효
      if (this.$refs.form.validate()) {
        try {
          // const { email, password, nickname } = this;
          const { email, password } = this;
          const user = { email, password, nickname: 'ham' };
          await this.$store.dispatch('users/logIn', user);
          // dispatch는 Promise 이므로 순서 보장을 위해 then을 붙인다.
          // 로그인시 메인으로 이동
          this.$router.push({
            path: '/',
          });
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>
