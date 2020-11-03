export const state = () => ({
  mainPosts: [],
  hasMorePost: true,
});

// 백엔드에서 불러오는 단위
const limit = 10;

export const mutations = {
  addMainPosts(state, payload) {
    // state.mainPosts = payload;
    state.mainPosts.unshift(payload); // unshift 를 통해 최신 게시글을 제일 앞으로
  },
  removeMainPosts(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.id);
    state.mainPosts.splice(index, 1);
  },
  addComment(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.postId);
    state.mainPosts[index].Comments.unshift(payload);
  },
  loadPosts(state) {
    // 10개씩 불러오기 위해 백엔드와 연결 전 더미 데이터를 넣음
    // Array(limit).fill() 은 빈 배열을 만드는 방법 | fill()이 undefined 데이터를 채워넣음
    const fakePosts = Array(limit)
      .fill()
      .map(v => ({
        id: Math.random().toString(),
        User: {
          id: 1,
          nickname: 'ham',
        },
        content: `hello infinite scrolling~ ${Math.random()}`,
        Comments: [],
        Images: [],
      }));
    state.mainPosts = state.mainPosts.concat(fakePosts);
    state.hasMorePost = fakePosts.length === limit; // 10이면 true
  },
};

export const actions = {
  // add({ commit }, payload, {root: true}) {}, // 3번째 인자로 root 객체를 전달하면, index의 muation을 호출할 수 있다.
  add({ commit }, payload) {
    commit('addMainPosts', payload);
  },
  remove({ commit }, payload) {
    commit('removeMainPosts', payload);
  },
  addComment({ commit }, payload) {
    commit('addComment', payload);
  },
  loadPosts({ commit }) {
    // 불필요한 요청을 보내지 않기 위해 if문으로 감싼다
    if (state.hasMorePost) {
      commit('loadPosts');
    }
  },
};
