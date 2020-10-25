export default function ({ store, redirect }) {
  // 로그인 상태가 아니라면 redirect
  if (!store.state.users.me) {
    redirect('/');
  }
}
