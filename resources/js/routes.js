import LoginPage from '../components/home/loginPage.vue';
import DashboardPage from '../components/home/dashboardPage.vue';

import NotFoundPage from '../components/error/404.vue';

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
  viewName: 'main'
},
{
  path: '/dashboard/',
  name: "cm.dashboard",
  component: DashboardPage
},
{
  path: '(.*)',
  component: NotFoundPage
},
{
  scrollBehavior() {
    document.getElementById('app')?.scrollIntoView();
  }
}
];

export default routes;
