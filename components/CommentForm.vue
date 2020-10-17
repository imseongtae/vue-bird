<template>
  <!-- prevent를 하지 않으면 초기화됨 -->
  <v-form
    ref="form"
    v-model="valid"
    class="comment"
    @submit.prevent="onSubmitForm"
  >
    <v-textarea
      v-model="content"
      filled
      auto-grow
      label="댓글 달기"
      :hide-details="hideDetails"
      :success="success"
      :success-messages="successMessages"
      @input="onChangeTextarea"
    />
    <v-btn color="green" dark absolute top right type="submit">
      twit
    </v-btn>
  </v-form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CommentForm',
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      valid: false,
      content: '',
      success: false,
      successMessages: '',
      hideDetails: true,
    };
  },
  computed: {
    ...mapState('users', ['me']),
  },
  methods: {
    onChangeTextarea(value) {
      if (value.length) {
        this.hideDetails = true;
        this.success = false;
        this.successMessages = '';
      }
    },
    async onSubmitForm() {
      const newComment = {
        id: Date.now(),
        postId: this.postId,
        content: this.content,
        User: {
          nickname: this.me.nickname,
        },
      };
      try {
        if (this.$refs.form.validate()) {
          await this.$store.dispatch('posts/addComment', newComment);
          this.content = '';
          this.success = true;
          this.successMessages = '댓글이 작성되었습니다.';
          this.hideDetails = false;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  position: relative;
}
</style>
