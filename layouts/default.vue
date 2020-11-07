<template>
  <v-app>
    <nav>
      <v-toolbar :style="{ backgroundColor: '#B5E2DF' }">
        <v-toolbar-title>
          <nuxt-link to="/" :style="{ textDecoration: 'none' }">
            <v-icon>mdi-rabbit</v-icon> hambird
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-form @submit.prevent="onSearchHashtag">
            <!-- 디자인을 적용하기 위한 div, 이번 프로젝트만을 위해서 -->
            <div
              :style="{ display: 'flex', height: '100%', alignItems: 'center' }"
            >
              <!-- mdi 를 통해 material design icons 임을 표시, 키워드를 통해 구분 -->
              <v-text-field
                v-model="hashtag"
                label="검색"
                hide-details
                prepend-icon="mdi-magnify"
                :style="{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '0px',
                }"
              />
            </div>
          </v-form>
          <v-btn v-if="me" text nuxt to="/profile">
            <div>프로필</div>
          </v-btn>
          <v-btn v-if="!me" text nuxt to="/signup">
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <!-- v-row 를 통해 가로 영역을 구분 -->
    <!-- no-gutters 를 통해 세로줄 간 패딩을 없앨 수 있음 -->
    <v-row no-gutters>
      <!-- v-col을 통해 세로로 나눌 때는 몇대몇으로 나눌 것인가가 중요 -->
      <!-- cols가 xs의 역할을 대신함. xs를 쓸 필요 없음 -->
      <v-col cols="12" md="4">
        <login-form />
      </v-col>
      <!-- <v-col cols="12" md="8" :style="{ backgroundColor: 'dodgerblue' }"> -->
      <v-col cols="12" md="8">
        <nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
// vuetify 단위
// xs, sm, md, lg, xl

import LoginForm from '~/components/LoginForm.vue';

import { mapState } from 'vuex';

export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      hashtag: '',
    };
  },
  computed: {
    ...mapState({
      me: state => state.users.me,
    }),
  },
  methods: {
    onSearchHashtag() {
      this.$router.push({
        path: `/hashtag/${this.hashtag}`,
      });
      this.hashtag = '';
    },
  },
};
</script>

<style></style>
