<template>
  <v-container>
    <div>
      <post-card v-for="post in mainPosts" :key="post.id" :post="post" />
    </div>
  </v-container>
</template>

<script>
import PostCard from '~/components/PostCard.vue';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'Index',
  components: {
    PostCard,
  },
  middleware({ store }) {
    store.dispatch('posts/loadPosts');
  },
  computed: {
    ...mapState({
      me: state => state.users.me,
      mainPosts: state => state.posts.mainPosts,
      hasMorePost: state => state.posts.hasMorePost,
    }),
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    ...mapActions(['posts/loadPosts']),
    onScroll() {
      const onScrollEvent =
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300;
      if (onScrollEvent) {
        if (this.hasMorePost) {
          this['posts/loadPosts']();
        }
      }
    },
  },
};
</script>

<style></style>
