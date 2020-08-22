<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>회원 가입</v-subheader>
          <v-form>
            <v-text-field
              label="email"
              type="email"
              required
            />
            <v-text-field
              label="password"
              type="password"
              required
            />
            <v-text-field
              label="check password"
              type="password"
              required
            />
            <v-text-field
              label="nickname"
              type="nickname"
              required
            />
            <v-checkbox
              required
              :rules="[v => !!v || '약관에 동의해야 합니다.']"
              label="ham에게 약속합니다. 더 나은 사람이 되기 위해 노력하자"
            />
            <v-btn color="#B5E2DF" type="submit">가입하기</v-btn>
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
      name: 'nuxt.js'
    }
  },
  head() {
    return {
      title: '회원가입'
    }
  }
}
</script>

<style>

</style>