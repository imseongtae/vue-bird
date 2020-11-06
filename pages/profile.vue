<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>내 프로필</v-subheader>
          <v-form v-model="valid" @submit.prevent="onChangeNickname">
            <v-text-field
              v-model="nickname"
              label="닉네임"
              :rules="nicknameRules"
              required
            />
            <v-btn color="blue" type="submit">
              수정
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card :style="{ margin: '12px 0' }">
        <v-container>
          <v-subheader>팔로잉</v-subheader>
          <follow-list :users="followingList" @remove="onRemoveFollowing" />
          <v-btn
            v-if="hasMoreFollowing"
            dark
            color="green"
            @click="loadMoreFollowings"
          >
            더보기
          </v-btn>
        </v-container>
      </v-card>
      <v-card :style="{ margin: '12px 0' }">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <follow-list :users="followerList" @remove="onRemoveFollower" />
          <v-btn
            v-if="hasMoreFollower"
            dark
            color="green"
            @click="loadMoreFollowers"
          >
            더보기
          </v-btn>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import FollowList from '~/components/FollowList.vue';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'Profile',
  // layout: 'admin',
  components: {
    FollowList,
  },
  data() {
    return {
      valid: false,
      nickname: '',
      nicknameRules: [v => !!v || '닉네임을 입력하세요'],
    };
  },
  computed: {
    ...mapState('users', [
      'me',
      'followerList',
      'followingList',
      'hasMoreFollowing',
      'hasMoreFollower',
    ]),
  },
  middleware({ store, redirect }) {
    if (!store.state.users.me) {
      redirect('/');
    }
    store.dispatch('users/loadFollowings');
    store.dispatch('users/loadFollowers');
  },
  watch: {
    me() {
      console.log('logout');
      this.$router.push({
        path: '/',
      });
    },
  },
  methods: {
    ...mapActions('users', ['removeFollower', 'removeFollowing']),
    async onChangeNickname() {
      const { nickname } = this;
      try {
        await this.$store.dispatch('users/changeNickname', nickname);
      } catch (err) {
        console.log(err);
      }
    },
    async onRemoveFollower(userId) {
      try {
        console.log(userId);
        await this.removeFollower(userId);
      } catch (err) {
        console.log(err);
      }
    },
    async onRemoveFollowing(userId) {
      try {
        console.log(userId);
        await this.removeFollowing(userId);
      } catch (err) {
        console.log(err);
      }
    },
    // loadMoreFollowings, loadMoreFollowers
    loadMoreFollowings() {
      this.$store.dispatch('users/loadFollowings');
    },
    loadMoreFollowers() {
      this.$store.dispatch('users/loadFollowers');
    },
  },
  head() {
    return {
      title: '프로필',
    };
  },
  // header 에서도 me의 상태에 따라 visible 유무를 결정
  // profile 페이지는 로그인한 사용자만 접근할 수 있어야 함
  // fetch를 middleware로 변경하는 과정에서 중복되어 삭제
  // middleware: ['authenticated'],
};
</script>

<style></style>
