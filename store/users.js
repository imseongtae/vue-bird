// module mode는  state와 mutations, actions를 각각 export 한다.
export const state = () => ({
  me: null, // 로그인 유무 테스트
});

// mutations 는 비동기 작업이 있으면 안 된다.
// mustations 동기적 작업
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
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
};
