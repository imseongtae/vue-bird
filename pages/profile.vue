<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>내 프로필</v-subheader>
          <v-form>
            <v-text-field label="닉네임" required />
            <v-btn color="blue" type="submit">수정</v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card :style="{ margin: '12px 0' }">
        <v-container>
          <v-subheader>팔로잉</v-subheader>
          <follow-list />
        </v-container>
      </v-card>
      <v-card :style="{ margin: '12px 0' }">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <follow-list />
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import FollowList from '~/components/FollowList.vue';

export default {
  name: 'profile',
  // layout: 'admin',
  components: {
    FollowList,
  },
  head() {
    return {
      title: '프로필'
    }
  }
}
</script>

<style>

</style>