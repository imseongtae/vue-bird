<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">
            main
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">
            profile
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/signup">
            signup
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin">
            admin
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  // head() {
  //   return {
  //     // title.. 넣을 수 있음
  //     title: 'vue-bird'
  //   }
  // }
};
</script>

<style></style>
