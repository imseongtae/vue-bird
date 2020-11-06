<template>
  <v-list>
    <v-col
      v-for="user in users"
      :key="user.id"
      cols="12"
      md="4"
      style="display: inline-block;"
    >
      <v-list-item>
        <v-list-item-avatar color="indigo">
          <span class="white--text headline">{{ user.nickname[0] }}</span>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ user.nickname }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon class="delete-btn" @click="onRemove(user.id)">
            mdi-minus-circle-outline
          </v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-col>
  </v-list>
</template>

<script>
// User: {id, nickname} // User 데이터 구조

export default {
  name: 'FollowList',
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    async onRemove(userId) {
      try {
        // this.$store.dispatch('users/removeFollower', userId);
        // 컴포넌트의 중복 사용을 피하기 위해 데이터를 부모 컴포넌트로 넘기기
        this.$emit('remove', userId);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.delete-btn:hover {
  color: red;
}
</style>
