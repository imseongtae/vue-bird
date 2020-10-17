<template>
  <div class="card">
    <v-card>
      <!-- <v-image /> -->
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
        <v-btn text color="orange" @click="onToggleComment">
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
    <!-- Comment -->
    <template v-if="commentOpened">
      <comment-form :post-id="post.id" />
      <v-list>
        <v-list-item v-for="comment in post.Comments" :key="comment.id">
          <v-list-item-avatar color="teal">
            <span>{{ comment.User.nickname[0] }}</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <h3>{{ comment.User.nickname }}</h3>
            <div>{{ comment.content }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </div>
</template>

<script>
import CommentForm from '@/components/CommentForm.vue';

export default {
  name: 'PostCard',
  components: {
    CommentForm,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      commentOpened: false,
    };
  },
  methods: {
    onRemovePost() {
      const id = this.post.id;
      this.$store.dispatch('posts/remove', {
        id,
      });
    },
    onEditPost() {},
    onToggleComment() {
      this.commentOpened = !this.commentOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 1rem;
}
</style>
