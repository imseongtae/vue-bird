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

import { mapState, mapActions } from 'vuex';

export default {
  name: 'Index',
  components: {
    PostCard,
    PostForm,
  },
  middleware({ store }) {
    store.dispatch('posts/loadPosts');
  },
  data() {
    return {
      name: 'nuxt.js',
    };
  },
  computed: {
    // https://vuex.vuejs.org/kr/guide/modules.html | vuex helper에서 네임 스페이스 바인딩
    ...mapState({
      me: state => state.users.me,
      mainPosts: state => state.posts.mainPosts,
      hasMorePost: state => state.posts.hasMorePost,
    }),
  },
  // created() 라이프사이클에서 등록했으면 beforeDestroy()에서 제거해주어야 메모리 누수가 생기지 않는다.
  // window는 created에서 못 쓴다. mounted() 에서만 사용할 수 있다. mounted는 화면에 붙는 것을 나타내는데, 화면에 붙기 전까지는 사용할 수 없다.
  // 화면에 붙기전에 window나 document에 접근하면 에러가 날 수 있다.
  // LifeCycle
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    ...mapActions(['posts/loadPosts']), // this['posts/loadPosts']();
    onScroll() {
      // 부등호를 통해 아랫부분 300만큼을 넘었을 경우
      const onScrollEvent =
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300;
      if (onScrollEvent) {
        if (this.hasMorePost) {
          // Post가 더 남아있을 경우에만 요청
          // this.loadPosts();
          this['posts/loadPosts']();
          console.log('On Scroll Event');
        }
      }
    },
  },
};
</script>

<style></style>
