export default function ({ store, redirect }) {
  // 로그인한 사용자라면 메인페이지로 redirect
  if (store.state.users.me) {
    redirect('/');
  }
}
