export const state = () => ({
  mainPosts: [],
});

export const mutations = {
  addMainPosts(state, payload) {
    // state.mainPosts = payload;
    state.mainPosts.unshift(payload); // unshift 를 통해 최신 게시글을 제일 앞으로
  },
};

export const actions = {
  // add({ commit }, payload, {root: true}) {}, // 3번째 인자로 root 객체를 전달하면, index의 muation을 호출할 수 있다.
  add({ commit }, payload) {
    commit('mainPosts', payload);
  },
};
