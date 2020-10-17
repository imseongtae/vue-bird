<template>
  <v-card class="card">
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <!-- outlined - 외곽선 그리기 -->
        <!-- auto-grow - 입력 영역이 자동으로 늘어남  -->
        <!-- clearable - x버튼으로 한 방에 다 지우는 것 -->
        <v-textarea
          v-model="content"
          outlined
          auto-grow
          clearable
          label="어떤 신기한 일이 있었나요?"
          :hide-details="hideDetails"
          :success-messages="successMessages"
          :success="success"
          :rules="[v => !!v.trim() || '내용을 입력하세요.']"
          @input="onChangeTextarea"
        />
        <v-btn type="submit" color="green" absolute right>
          twit
        </v-btn>
        <v-btn>이미지 업로드</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PostForm',
  data() {
    return {
      content: '',
      hideDetails: true, // true를 통해 에러메시지를 표현할 공간을 제거, 나중에 false로 바꾸어주어 공간 생성
      successMessages: '',
      success: false,
      valid: false,
    };
  },
  computed: {
    // ...mapState('users', {
    //   me: state => state.me,
    // }),
    ...mapState('users', ['me']),
  },
  methods: {
    onChangeTextarea(value) {
      // 사용자 경험을 향상시키기 위해 연속된 작업이 이어질 때는 이전의 상태값 초기화 작업이 필요
      // 이전의 게시글 성공 상태가 초기화되어야 한다.
      if (value.length) {
        this.hideDetails = true;
        this.success = false;
        this.successMessages = '';
      }
    },
    async onSubmitForm() {
      if (this.$refs.form.validate) {
        const { content } = this;
        const newPost = {
          content,
          User: { nickname: this.me.nickname },
          Comments: [],
          Images: [],
          id: Date.now(),
          createdAt: Date.now(),
        };
        try {
          await this.$store.dispatch('posts/add', newPost);
          this.content = '';
          this.hideDetails = false;
          this.success = true;
          this.successMessages = '게시글 등록 성공';
        } catch (err) {
          console.log(err);
        } finally {
          // 게시글이 작성되면 에러메시지가 표현되는 공간을 제거
          setTimeout(() => {
            this.hideDetails = true;
            this.success = true;
            this.successMessages = '';
          }, 2000);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 1rem;
}
</style>
