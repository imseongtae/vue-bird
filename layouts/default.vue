<template>
  <v-app>
    <nav>
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
    </nav>
    <!-- v-row 를 통해 가로 영역을 구분 -->
    <v-row>
      <!-- v-col을 통해 세로로 나눌 때는 몇대몇으로 나눌 것인가가 중요 -->
      <!-- cols가 xs의 역할을 대신함. xs를 쓸 필요 없음 -->
      <v-col cols="12" md="4" :style="{backgroundColor: 'green'}">로그인 영역</v-col>
      <v-col cols="12" md="8" :style="{backgroundColor: 'dodgerblue'}">아티클 영역</v-col>      
    </v-row>
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