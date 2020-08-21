<template>
  <div>
    hello {{name}}
    <p>this is main page</p>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      name: 'nuxt.js'
    }
  },
  // head() {
  //   return {
  //     // title.. 넣을 수 있음
  //     title: '메인'
  //   }
  // }
}
</script>

<style>

</style>