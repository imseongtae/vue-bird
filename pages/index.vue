<template>
  <v-container>
    <post-form v-if="me" />
    <div>
      <post-card v-for="post in mainPosts" :key="post.id" :post="post" />
    </div>
  </v-container>
</template>

<script>
import PostCard from '~/components/PostCard.vue';
import PostForm from '~/components/PostForm.vue';

import { mapState } from 'vuex';

export default {
  name: 'Index',
  components: {
    PostCard,
    PostForm,
  },
  data() {
    return {
      name: 'nuxt.js',
    };
  },
  computed: {
    // me() {
    //   return this.$store.state.users.me;
    // },
    // ...mapState({
    //   me: state => state.users.me,
    // }),
    // https://vuex.vuejs.org/kr/guide/modules.html
    // vuex helper에서 네임 스페이스 바인딩
    ...mapState({
      me: state => state.users.me,
      mainPosts: state => state.posts.mainPosts,
    }),
  },
};
</script>

<style></style>
