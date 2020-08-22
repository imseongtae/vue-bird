<template>
  <div>
    <post-card />
    <post-card />
    <post-card />
    <post-card />
  </div>
</template>

<script>
import PostCard from '~/components/PostCard.vue';

export default {
  name: 'Index',
  components: {
    PostCard,
  },
  data() {
    return {
      name: 'nuxt.js',
    };
  },
};
</script>

<style></style>
