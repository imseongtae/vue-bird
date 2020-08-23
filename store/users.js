export const state = () => ({
  users: 'users',
});

export const mutations = {
  bye(state) {
    state.users = 'goodbye users';
  },
};
