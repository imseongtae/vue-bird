<template>
  <v-card class="card">
    <v-image />
    <v-card-text>
      <div>
        <h3>{{ post.User.nickname }}</h3>
        <!-- <div>안녕하세요. 게시글입니다.</div> -->
        <div>
          {{ post.content }}
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="orange">
        <v-icon>mdi-twitter-retweet</v-icon>
      </v-btn>
      <v-btn text color="orange">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn text color="orange">
        <v-icon>mdi-comment-outline</v-icon>
      </v-btn>
      <v-menu offset-y open-n-hover>
        <!-- 드롭 -->
        <template v-slot:activator="{ on }">
          <v-btn text color="orange" v-on="on">
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
        <div style="background: white;">
          <v-btn dark color="red" @click="onRemovePost">
            삭제
          </v-btn>
          <v-btn text color="orange" @click="onEditPost">
            수정
          </v-btn>
        </div>
      </v-menu>
      <!-- end menu -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onRemovePost() {
      const id = this.post.id;
      this.$store.dispatch('posts/remove', {
        id,
      });
    },
    onEditPost() {},
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 1rem;
}
</style>
