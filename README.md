# vue-bird

## table of contents
- layouts
- vuetify


---



## keypoints

- 폴더의 이름은 항상 동일해야 한다. layouts, pages
- nuxt에서는 `Vue.use()`를 사용하지 않는다. nuxt는 SPA와 다르게 단위별 페이지가 존재하므로 `Vue.use()`를 사용하면 모든 페이지에 `Vue.use()`의 중복이 발생한다.


## layouts


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