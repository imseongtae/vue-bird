# vue-bird

## table of contents
- [nuxt 주의사항](#nuxt-주의사항)
- [layouts](#layouts)
- [vuetify](#vuetify)
- [ESLint and Prettier](#eslint-and-prettier)
- [.nuxt](#.nuxt)
- [vuex](#vuex)

---



## nuxt 주의사항

- 폴더의 이름은 항상 동일해야 한다. `layouts`, `pages`
- nuxt에서는 `Vue.use()`를 사용하지 않는다. nuxt는 SPA와 다르게 단위별 페이지가 존재하므로 `Vue.use()`를 사용하면 모든 페이지에 `Vue.use()`의 중복이 발생한다.


## layouts
layouts 구현에 도움 받을 수 있는 자료

[pre-made-layouts](https://vuetifyjs.com/ko/getting-started/pre-made-layouts/)
[google-keep layouts](https://vuetifyjs.com/ko/examples/layouts/google-keep/)


### head
layouts의 header 간에도 중복을 제거할 수 있다.

```js
head() {
  return {
    // title.. 넣을 수 있음
    title: 'vue-bird'
  }
}
```


## vuetify
nuxtjs에 vuetify를 적용려고 하는데 버전이 바뀌는 경우가 발생! 이 때는 공식 문서를 찾아간다!

- [@nuxtjs/vuetify](https://www.npmjs.com/package/@nuxtjs/vuetify)


### vuetify icon

[vuetify-icon](https://vuetifyjs.com/ko/components/icons/)
[materialdesignicons](https://materialdesignicons.com/)

mdi 와 같은 키워드를 붙이고 사용해야 함

```html
<v-icon>mdi-rabbit</v-icon> Nodebird
```



### vuetify grid System

```html
<!-- v-row 를 통해 가로 영역을 구분 -->
<v-row>
  <!-- v-col을 통해 세로로 나눌 때는 몇대몇으로 나눌 것인가가 중요 -->
  <!-- cols가 xs의 역할을 대신함. xs를 쓸 필요 없음 -->
  <v-col cols="12" md="4">
    <login-form />
  </v-col>
  <v-col cols="12" md="8" :style="{backgroundColor: 'dodgerblue'}">
    <nuxt />
  </v-col>      
</v-row>
```



## ESLint and Prettier

[development-tools - nuxtjs guide](https://ko.nuxtjs.org/guide/development-tools/)



## .nuxt
개발환경 또는 배포환경으로 빌드할 때 빌드된 결과물이 `.nuxt`에 들어있다.
자동으로 생성된 폴더라서 형상관리를 하지 않는다.



## vuex
vuex 헬퍼 함수 사용법

```js
computed: {
  ...mapState('users', ['followerList', 'followingList']),
},
methods: {
  ...mapActions('users', ['removeFollower', 'removeFollowing']),
}
```

- [vuex 헬퍼에서 네임스페이스 바인딩](https://vuex.vuejs.org/kr/guide/modules.html#%E1%84%92%E1%85%A6%E1%86%AF%E1%84%91%E1%85%A5%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5-%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%B3%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3-%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC)


### error
`state`를 비구조화할당하여 꺼내지 않으면 에러가 발생함

```js
// loadPosts({ commit }) {
loadPosts({ commit, state }) {
  // state 없으면 Error 발생할 수 있음
  if (state.hasMorePost) {
    commit('loadPosts');
  }
},
```



## middleware
- nuxt는 라우팅을 미들웨어에서 설정
- [https://ko.nuxtjs.org/guide/routing](https://ko.nuxtjs.org/guide/routing)



## 동적 라우트 매칭
동적 라우트란 URL 주소의 경로에 변수를 가지고 있는 라우트를 의미하며, 이때 경로 내부에 들어있는 변수를 동적 세그먼트라고 부름

- `post/` URL에 컴포넌트가 매칭되지 않게 하기 위해서 `post/_id/index.vue`의 파일 구조를 따름
- URL post/1 post/3 post/13 등과 같이 `post/` 뒤에 경로가 붙을 경우에만 동작하기 위해
- `post/_id.vue` - URL에 `post/`만 입력된 상황에서 컴포넌트가 매칭되는 경우를 피하기 위해

```
post
 └─_id
    └─index.vue
```


## 백엔드로 데이터 요청하기
게시물의 개수를 모른다고 가정하고, 진행
불러오는 게시물의 개수가 10개미만이면..! 더 불러오는 기능(백엔드로 보내는 요청)을 해제한다.

```js
export const state = () => ({
  mainPosts: [],
  hasMorePost: true,
});
```

### fetch
- [nuxtjs pages-fetch](https://ko.nuxtjs.org/docs/2.x/components-glossary/pages-fetch)
- **fetch(context) has been deprecated**, instead you can use an anonymous middleware in your page: middleware(context)
- `fetch`는 처음 로드될 때 데이터를 넣어주는 역할, 컴포넌트가 화면에 보이기 전, Vuex스토어에 비동기적으로 데이터를 넣을 때 사용
- 컴포넌트가 마운트되기 전에 사용

```js
fetch({ store }) {
  store.dispatch('posts/loadPosts');
},
```

## Infinite Scrolling

```js

```



## window
Browser의 height 값에 접근


### window.scrollY
- 사용자가 스크롤을 얼마나 내렸는지 알려주는 값
- window.scrollY 를 통해 브라우저의 현재 위치 값에 접근할 수 있음

```js
console.log(window.scrollY);
```


### document.documentElement.clientHeight
- 브라우저 영역 안에 담긴 컨텐츠의 높이를 말함. 
- `document`, 즉 내용 전체의 높이나 길이가 아님 

```js
document.documentElement.clientHeight
```

### document.documentElement.scrollHeight

```js
document.documentElement.scrollHeight

```

### 한 가지 규칙
컨텐츠의 스크롤을 끝까지 내리면 아래 규칙이 성립함

```js
window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight
```

- Infinite Scrolling을 적용하기 위해 아래와 같은 로직을 적용할 수 있다.

```js
const onScrollEvent =
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300;
```



## QnA

### ()를 감싸서 return 하는 이유

```js
() => {} // 헷갈릴 수 있음
() => ({}) // {} 를 return, 객체는 소괄호를 빼면 구분이 되지 않는다.
```


### 배열 데이터를 바꿀 때
- 컴포넌트에서 배열 데이터를 수정한 후, 자식 컴포넌트로 데이터를 넘겨줄 때
- [Vue.set(object, key, value) 메소드를 사용하여 중첩 된 객체에 반응성 속성을 추가](https://kr.vuejs.org/v2/guide/reactivity.html#%EB%B3%80%EA%B2%BD-%EA%B0%90%EC%A7%80-%EA%B2%BD%EA%B3%A0)

```js
this.$set(this.abc, '0', '5')
```


