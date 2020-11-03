<template>
  <v-container v-if="post">
    <post-card :post="post" />
  </v-container>
  <v-container v-else>
    해당 아이디의 게시글이 존재하지 않습니다.
  </v-container>
</template>

<script>
import PostCard from '~/components/PostCard.vue';

import { mapState } from 'vuex';

export default {
  name: 'PostItem',
  components: {
    PostCard,
  },
  computed: {
    ...mapState('posts', ['mainPosts']),
    // 게시글의 아이디는 $route.params.id에 들어있음
    post() {
      return this.mainPosts.find(
        v => v.id === parseInt(this.$route.params.id, 10),
      );
    },
    // post() {
    //   return this.$store.state.posts.mainPosts.find(
    //     v => v.id === parseInt(this.$route.params.id, 10),
    //   );
    // },
  },
};
</script>

<style></style>
