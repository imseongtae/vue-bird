<template>
  <v-app>
    <div>
      <v-toolbar>
        <v-toolbar-title>
          <nuxt-link to="/" :style="{textDecoration: 'none'}">
            <v-icon>mdi-rabbit</v-icon> Nodebird
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <!-- mdi 를 통해 materialdesignicons 임을 표시, 키워드를 통해 구분 -->
          <v-text-field label="검색" hide-details prepend-icon="mdi-magnify" :style="{ display: 'flex', alignItems: 'center', marginTop:'0px' }" />
          <v-btn text nuxt to="/profile">
            <div>프로필</div>
          </v-btn>
          <v-btn text nuxt to="/signup">
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
  </v-app>
</template>

<script>
export default {
  // head() {
  //   return {
  //     // title.. 넣을 수 있음
  //     title: 'vue-admin'
  //   }
  // }
}
</script>

<style>

</style>