import LoginPage from '@views/globals/LoginCmPage.vue';
import DashboardPage from '@/views/mobile/pages/PageDashboard.vue';

import NotFoundPage from '../pages/404.vue';

import store from '@/store/store';

function checkAuth({ to, from, resolve, reject }) {
  const router = this;
  if (store.state.loginState) {
    resolve()
  } else {
    reject();
    router.navigate({ name: 'login' });
  }
}

const routes = [{
  path: '/',
  redirect: "/login/",
},
{
  path: '/login/',
  name: 'login',
  component: LoginPage,
  viewName: 'main',
  options: {
    transition: 'f7-dive',
  },
},
{
  path: '/dashboard/',
  name: "cm.dashboard",
  component: DashboardPage,
},
{
  path: '(.*)',
  component: NotFoundPage,
},
{
  scrollBehavior() {
    document.getElementById('app')?.scrollIntoView();
  }
}
];

export default routes;
