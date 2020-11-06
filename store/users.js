// module mode는  state와 mutations, actions를 각각 export 한다.
export const state = () => ({
  me: null, // 로그인 유무 테스트
  followerList: [],
  followingList: [],
  hasMoreFollower: true,
  hasMoreFollowing: true,
});

// dummy data
const totalFollowers = 8;
const totalFollowings = 6;
const limit = 3;

// mutations 는 비동기 작업이 있으면 안 된다.
// mustations 동기적 작업
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickname(state, nickname) {
    state.me.nickname = nickname;
  },
  removeFollower(state, userId) {
    // payload 인자로 넘어오는 데이터는 userId
    const index = state.followerList.findIndex(v => v.id === userId);
    state.followerList.splice(index, 1);
  },
  removeFollowing(state, userId) {
    // payload 인자로 넘어오는 데이터는 userId
    const index = state.followingList.findIndex(v => v.id === userId);
    state.followingList.splice(index, 1);
  },
  loadFollowings(state) {
    const diff = totalFollowings - state.followingList.length;
    const fakeFollowings = Array(diff > limit ? limit : diff)
      .fill()
      // eslint-disable-next-line no-unused-vars
      .map(v => ({
        id: Math.random().toString(),
        nickname: Math.floor(Math.random() * 1000),
      }));
    state.followingList = state.followingList.concat(fakeFollowings);
    state.hasMoreFollowing = fakeFollowings.length === limit;
  },
  loadFollowers(state) {
    const diff = totalFollowers - state.followerList.length;
    const fakeUsers = Array(diff > limit ? limit : diff)
      .fill()
      // eslint-disable-next-line no-unused-vars
      .map(v => ({
        id: Math.random().toString(),
        nickname: Math.floor(Math.random() * 1000),
      }));
    state.followerList = state.followerList.concat(fakeUsers);
    state.hasMoreFollower = fakeUsers.length === limit;
  },
};

// actions에 비동기적 작업을 위임
// commit은 mutations 실행
// dispatch는 actions를 실행
export const actions = {
  signUp(context, payload) {
    console.log(context);
    context.commit('setMe', payload);
  },
  logIn({ commit }, payload) {
    commit('setMe', payload);
  },
  logOut({ commit }) {
    commit('setMe', null);
  },
  changeNickname({ commit }, nickname) {
    commit('changeNickname', nickname);
  },
  removeFollower({ commit }, userId) {
    commit('removeFollower', userId);
  },
  removeFollowing({ commit }, userId) {
    commit('removeFollowing', userId);
  },
  loadFollowers({ commit, state }) {
    if (state.hasMoreFollower) commit('loadFollowers');
  },
  loadFollowings({ commit, state }) {
    if (state.hasMoreFollowing) commit('loadFollowings');
  },
};
