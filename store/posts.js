export const state = () => ({
  mainPosts: [],
  hasMorePost: true,
});

// 백엔드 흉내를 내기 위해
// 서버쪽 데이터를 모르는 상황에서 프론트엔드에서 효율적으로 개발하는 방법
const totalPosts = 51; // 총 dummy data 개수
const limit = 10; // 백엔드에서 응답한 게시물 개수

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
    // 아직 안 불러온 게시글 수, 전체 개수 - 현재 불러온 개수
    const diff = totalPosts - state.mainPosts.length;
    // 10개씩 불러오기 위해 백엔드와 연결 전 더미 데이터를 넣음
    // Array(limit).fill() 은 빈 배열을 만드는 방법 | fill()이 undefined 데이터를 채워넣음
    const fakePosts = Array(diff > limit ? limit : diff)
      .fill()
      // eslint-disable-next-line no-unused-vars
      .map(v => ({
        id: Math.random().toString(),
        User: {
          id: 1,
          nickname: 'ham',
        },
        content: `Hello infinite scrolling~ ${Math.random()}`,
        Comments: [],
        Images: [],
      }));
    state.mainPosts = state.mainPosts.concat(fakePosts);
    // 불러오는 post가 10개이면 true
    state.hasMorePost = fakePosts.length === limit;
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
  loadPosts({ commit, state }) {
    // state 없으면 Error 발생할 수 있음
    // 불필요한 요청을 보내지 않기 위해 if문으로 감싼다
    if (state.hasMorePost) {
      commit('loadPosts');
    }
  },
};
