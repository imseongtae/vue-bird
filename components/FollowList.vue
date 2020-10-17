<template>
  <v-list>
    <ul>
      <li v-for="user in users" :key="user.id">
        <span>{{ user.nickname }}</span>
        <v-icon class="delete-btn" @click="onRemove(user.id)">
          mdi-minus-circle-outline
        </v-icon>
      </li>
    </ul>
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
