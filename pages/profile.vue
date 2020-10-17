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
        </v-container>
      </v-card>
      <v-card :style="{ margin: '12px 0' }">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <follow-list :users="followerList" @remove="onRemoveFollower" />
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
    ...mapState('users', ['followerList', 'followingList']),
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
  },
  head() {
    return {
      title: '프로필',
    };
  },
};
</script>

<style></style>
